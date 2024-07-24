import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritsService {
  private localKey = 'favorites';

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem(this.localKey) || '[]');
  }

  isFavorite(movieId: number): boolean {
    const favorites = this.getFavorites();
    return favorites.some(movie => movie.id === movieId);
  }

  addFavorite(movie: any): void {
    const favorites = this.getFavorites();
    favorites.push(movie);
    localStorage.setItem(this.localKey, JSON.stringify(favorites));
  }

  removeFavorite(movieId: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(movie => movie.id !== movieId);
    localStorage.setItem(this.localKey, JSON.stringify(favorites));
  }
}
