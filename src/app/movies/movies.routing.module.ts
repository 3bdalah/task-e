import { Movie } from './interface/movie';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './../not-found/not-found.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { authGuard } from '../../auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies',component:MoviesListComponent,title:"list movies"  },
  { path: 'movie/:id',component:MovieDetailsComponent,title:"Info Movie"  },
  { path: 'fav-movies',canActivate:[authGuard], component:FavListComponent,title:"Fav list"  },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
