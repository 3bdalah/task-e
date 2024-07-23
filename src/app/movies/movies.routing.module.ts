import { Movie } from './interface/movie';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './../not-found/not-found.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FavListComponent } from './fav-list/fav-list.component';

const routes: Routes = [  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies',component:MoviesListComponent,title:"list movies"  },
  { path: 'fav-movies',component:FavListComponent,title:"Fav list"  },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
