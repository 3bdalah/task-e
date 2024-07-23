import { Component } from '@angular/core';
import { Movie } from '../interface/movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  moviesList:Movie[] = [];
  constructor(private movies:MoviesService){};
ngOnInit() {
  // console.log("movies list");
  
    this.loadMovies('popular');

}
loadMovies(category: string) {
  this.movies.getMovies(category).subscribe(data => {
    
    this.moviesList = data.results;
    // console.log("movies" , this.movies);
  });
}

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const category = selectElement.value;
    this.loadMovies(category);
  }

// this.movies.getTopMovies().subscribe((mov)=>{
//   this.moviesList = mov.results;
//   console.log("movies list",this.moviesList);
// });
}
