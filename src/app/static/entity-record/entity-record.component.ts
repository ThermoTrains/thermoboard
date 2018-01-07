import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { valueFieldFragment } from '@app/shared/values/values.component';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';

const EntityRecordQuery = gql`
query EntityRecord($id: ID!) {
  EntityRecord(id: $id) {
   	id
    name
    entity {
      id
      category
      serial_number
      exists_since
      kind {
        id
        manufacturer
        name
      }
    }
    record {
      id
      timestamp
      place {
        id
        name
      }
    }
    values {
      ...valueFields
    }
  }
}

${valueFieldFragment}
`;

@Component({
  selector: 'thermo-entity-record',
  templateUrl: './entity-record.component.html',
  styleUrls: ['./entity-record.component.scss']
})
export class EntityRecordComponent implements OnInit, OnDestroy {
  id: string;
  entityRecord: any;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private apollo: Apollo) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.apollo.watchQuery<any>({
        query: EntityRecordQuery,
        variables: { id: this.id }
      }).valueChanges.subscribe(({ data }) => {
        this.entityRecord = data.EntityRecord[0];
      });
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
