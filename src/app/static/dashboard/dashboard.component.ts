import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';
import { FavoriteService } from '@app/core/favorite/favorite.service';

@Component({
  selector: 'thermo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(private favoriteService: FavoriteService) {
  }

  ngOnInit() {
  }

}
