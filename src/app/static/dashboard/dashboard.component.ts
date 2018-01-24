import { Component } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';
import { FavoriteService } from '@app/core/favorite/favorite.service';
import Favorite from '@app/core/favorite/Favorite';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

const RecordQuery: DocumentNode = gql`
{
  Record {
    id
    timestamp
  }
}
`;

@Component({
  selector: 'thermo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  favorites: Favorite[];
  timestamps: string[];

  constructor(private favoriteService: FavoriteService,
              private apollo: Apollo) {
    this.favorites = favoriteService.getFavorites();

    this.apollo.watchQuery<any>({
      query: RecordQuery
    }).valueChanges.subscribe(({ data }) => {
      this.timestamps  = data.Record.map(record => {
        return record.timestamp;
      });
    });
  }
}
