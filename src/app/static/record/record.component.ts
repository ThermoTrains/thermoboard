import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { valueFieldFragment } from '@app/shared/values/values.component';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';
import { MatTableDataSource } from '@angular/material';

const RecordQuery = gql`
query Record($id: ID!) {
  Record(id: $id) {
    id
    timestamp
    place {
      id
      name
      latitude
      longitude
    }
    values {
        ...valueFields
    }
    entity_records {
      id
      name
      entity {
        id
        serial_number
        category
      }
      values {
        ...valueFields
      }
    }
  }
}

${valueFieldFragment}
`;

@Component({
  selector: 'thermo-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit, OnDestroy {
  id: string;
  record: any;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  entityRecordsDataSource = new MatTableDataSource();
  displayedColumns = ['favorite', 'name', 'category', 'serialNumber', 'actions'];
  private sub: any;

  constructor(private route: ActivatedRoute,
              private apollo: Apollo,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.apollo.watchQuery<any>({
        query: RecordQuery,
        variables: { id: this.id }
      }).valueChanges.subscribe(({ data }) => {
        this.record = data.Record[0];
        this.entityRecordsDataSource.data = this.record.entity_records.slice(0).sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }

          if (a.name > b.name) {
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
