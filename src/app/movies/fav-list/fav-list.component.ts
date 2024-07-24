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
  isLoading:Boolean=false;
  constructor(private favoriteService:FavoritsService){};
  ngOnInit():void{
    this.isLoading=true;
    this.movies = this.favoriteService.getFavorites();
    this.isLoading=false;
  }
}
