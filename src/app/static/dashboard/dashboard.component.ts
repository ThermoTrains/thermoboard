import { Component } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';
import { FavoriteService } from '@app/core/favorite/favorite.service';
import Favorite from '@app/core/favorite/Favorite';

@Component({
  selector: 'thermo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  favorites: Favorite[];

  constructor(favoriteService: FavoriteService) {
    this.favorites = favoriteService.getFavorites();
  }
}
