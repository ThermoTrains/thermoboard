import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import Favorite from '@app/core/favorite/Favorite';

@Injectable()
export class FavoriteService {
  private favorites: Favorite[];

  constructor(private localStorageService: LocalStorageService) {
    this.favorites = localStorageService.getItem('favorites') || [];
  }

  addFavorite(url: string, name: string, type: string) {
    this.favorites.push(new Favorite(url, name, type));
    this.localStorageService.setItem('favorites', this.favorites);
  }

  removeFavorite(url: string) {
    const i = this.favorites.findIndex(f => f.url === url);
    this.favorites.slice(i, 1);
    this.localStorageService.setItem('favorites', this.favorites);
  }

  isFavorite(url: string): boolean {
    return this.favorites.some(f => f.url === url);
  }

  getFavorites(): Favorite[] {
    return this.favorites;
  }
}
