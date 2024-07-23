import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  // allMoviesWishList: MoviesInterface[] = [];
  addedMovie: boolean = false;
  removeMovie: boolean = false;
  constructor(
    private moviesData: MoviesService,
    private router: Router,
  
  ) {}

  ngOnInit() {
  
  }

  openDetailes(idMovie: number) {
    this.router.navigate(['movies/movie/', idMovie]);
    this.moviesData.getfullyDataMovie(idMovie);

  }

}
