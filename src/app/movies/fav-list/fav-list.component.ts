import { Component } from '@angular/core';
import { Movie } from '../interface/movie';
import { FavoritsService } from '../service/favorits.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrl: './fav-list.component.css'
})
export class FavListComponent {
  movies:Movie[] =[];
  constructor(private favoriteService:FavoritsService){};
  ngOnInit():void{
    this.movies =this.favoriteService.getFavorites();
    console.log("this movie favorists",this.movies);
  }
}
