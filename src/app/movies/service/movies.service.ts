import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'fd1abe0fb535494df40c06c72320b913';
  private apiUrl = 'https://api.themoviedb.org/3';
  private MovieDetailesApi = 'https://api.themoviedb.org/3/movie/';
  private headers = new HttpHeaders({
    Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDFhYmUwZmI1MzU0OTRkZjQwYzA2YzcyMzIwYjkxMyIsInN1YiI6IjY0NzUzM2IzOTI0Y2U2MDBiZmQzZGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAr9zbvolHwyzr3hobp9zIxzyH-K7bnjp4TQInYosls`, // Replace with your access token
    Accept: 'application/json',
  });

  constructor(private http: HttpClient) {}

  getMovies(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${category}?api_key=${this.apiKey}`);
  }
  getTopMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`);
  }

  getfullyDataMovie(movieID: number) {
    return this.http.get<any>(
      this.MovieDetailesApi + movieID + '?api_key=' + this.apiKey
    );
  }

}
