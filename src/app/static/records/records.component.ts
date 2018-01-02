import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { MatTableDataSource } from '@angular/material';

const RecordQuery: DocumentNode = gql`
{
  Record(orderby: ["timestamp", "desc"]) {
    id
    timestamp
    place {
      id
      name
    }
    entityRecords {
      id
      entity {
        id
        kind {
          id
          name
        }
      }
    }
  }
}
`;

@Component({
  selector: 'thermo-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  displayedColumns = ['timestamp', 'place', 'kinds', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery<any>({
      query: RecordQuery
    }).valueChanges.subscribe(({ data }) => {
      this.dataSource.data = data.Record;
    });
  }

  ngOnInit() {
  }

  getKindList(record): string {
    return record.entityRecords
      .map(e => e.entity.kind.name)
      .filter((v, i, a) => a.indexOf(v) === i)
      .join(', ');
  }

}
