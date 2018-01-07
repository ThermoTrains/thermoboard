import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

const RecordQuery: DocumentNode = gql`
{
  Record(orderby: ["timestamp", "desc"]) {
    id
    timestamp
    place {
      id
      name
    }
    entity_records {
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
export class RecordsComponent implements AfterViewInit {
  displayedColumns = ['favorite', 'timestamp', 'place', 'kinds', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apollo: Apollo,
              private router: Router) {
    this.apollo.watchQuery<any>({
      query: RecordQuery
    }).valueChanges.subscribe(({ data }) => {
      this.dataSource.data = data.Record.map(record => {
        const copy = { ...record };
        copy.kinds = this.getKindList(copy);

        return copy;
      });
    });
  }

  applyFilter(filterValue: string) {
    const trimmedValue = filterValue.trim(); // Remove whitespace
    this.dataSource.filter = trimmedValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sorter.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getKindList(record): string {
    return record.entity_records
      .map(e => e.entity.kind.name)
      .filter((v, i, a) => a.indexOf(v) === i)
      .join(', ');
  }
}
