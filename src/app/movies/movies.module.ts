import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MovieRoutingModule } from './movies.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    FavListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // AppRoutingModule,
    MovieRoutingModule,
    FormsModule,
    
  ],
  exports:[
    MoviesListComponent,FavListComponent,MovieDetailsComponent
  ]

})
export class MoviesModule { }
