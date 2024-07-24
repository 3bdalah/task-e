import { AuthService } from './../../auth/service/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../interface/movie';
import { CommentsService } from '../service/comments.service';
import { FavoritsService } from '../service/favorits.service';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  isLoading:Boolean=false;
  movieAllDetailes!: Movie;
  moveiId!: number;
  comments: any[] = [];
  newComment: string = '';
  newReplies: { [key: number]: string } = {};
  isLoggedIn:boolean=false;
constructor(private  _ActivateRoute:ActivatedRoute,private fullyDataMovie:MoviesService,private favoriteService: FavoritsService,
  private commentService: CommentsService,private authService:AuthService){}
  ngOnInit(){
    const id = this._ActivateRoute.snapshot.params['id'];
     this.isLoading = true;
    this._ActivateRoute.params.subscribe((params) => { this.moveiId = params['id'];
      this.fullyDataMovie
        .getfullyDataMovie(this.moveiId)
        .subscribe((dataMovie) => {  this.movieAllDetailes = dataMovie;
          this.isLoading = false;
        });
        // console.log("all data about mmovie ", this.movieAllDetailes);
      });
      this.loadComments(id);
      this.authService.userActive.subscribe((res)=>{
        if(res=="active"){
            this.isLoggedIn =true;
          }else{
            this.isLoggedIn= false;
          }
      });
  
  this.authService.getStatusUser().subscribe((status) => {
    this.isLoggedIn = !!status;
  });

  
  }

  loadComments(movieId: number): void {
    this.comments = this.commentService.getComments(movieId);
  }

  addComment(): void {
    if (this.newComment.trim()) {
      const comment = {
        text: this.newComment,
        date: new Date()
      };
      this.commentService.addComment(this.movieAllDetailes.id, comment);
      this.loadComments(this.movieAllDetailes.id);
      this.newComment = '';
    }
  }


  addReply(commentIndex: number): void {
    const replyText = this.newReplies[commentIndex];
    if (replyText && replyText.trim()) {
      const reply = {
        text: replyText,
        date: new Date()
      };
      this.commentService.addReply(this.movieAllDetailes.id, commentIndex, reply);
      this.loadComments(this.movieAllDetailes.id);
      this.newReplies[commentIndex] = '';
    }
  }
  isFavorite(): boolean {
    return this.favoriteService.isFavorite(this.movieAllDetailes.id);
  }
  toggleFavorite(): void {
    if (this.isFavorite()) {
      this.favoriteService.removeFavorite(this.movieAllDetailes.id);
    } else {
      this.favoriteService.addFavorite(this.movieAllDetailes);
    }
  }
}
