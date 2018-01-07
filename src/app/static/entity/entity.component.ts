import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';
import { MatTableDataSource } from '@angular/material';
import { valueFieldFragment } from '@app/shared/values/values.component';

const EntityQuery: DocumentNode = gql`
query Entity($id: ID!) {
  Entity(id: $id) {
    id
    category
    serial_number
    exists_since
    kind {
      id
      name
      manufacturer
    }
    entity_records {
      id
      name
      record {
        id
        timestamp
        place {
          id
          name
        }
      }
    }
  }
}
`;

@Component({
  selector: 'thermo-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit, OnDestroy {
  id: string;
  entity: any;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  displayedColumns = ['timestamp', 'name', 'place', 'actions'];
  recordsDataSource = new MatTableDataSource();
  private sub: any;

  constructor(private route: ActivatedRoute,
              private apollo: Apollo) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.apollo.watchQuery<any>({
        query: EntityQuery,
        variables: { id: this.id }
      }).valueChanges.subscribe(({ data }) => {
        this.entity = data.Entity[0];
        this.recordsDataSource.data = this.entity.entity_records.slice(0).sort((a, b) => {
          if (a.record.timestamp > b.record.timestamp) {
            return -1;
          }

          if (a.record.timestamp < b.record.timestamp) {
            return 1;
          }

          return 0;
        });
      });
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
