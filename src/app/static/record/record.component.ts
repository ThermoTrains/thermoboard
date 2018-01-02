import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { valueFieldFragment } from '@app/shared/values/values.component';

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
    entityRecords {
      id
      name
      entity {
        id
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
  private sub: any;

  constructor(private route: ActivatedRoute,
              private apollo: Apollo) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.apollo.watchQuery<any>({
        query: RecordQuery,
        variables: { id: this.id }
      }).valueChanges.subscribe(({ data }) => {
        this.record = data.Record[0];
      });
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
