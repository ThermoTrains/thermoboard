import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

const EntityQuery = gql`
query EntityKind($id: ID!) {
  EntityKind(id: $id) {
    entities {
      id
      category
      serial_number
      exists_since
      kind {
        id
        name
      }
    }
  }
}
`;

@Component({
  selector: 'thermo-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit, AfterViewInit {
  displayedColumns = ['favorite', 'category', 'kind', 'serial_number', 'exists_since', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private apollo: Apollo,
              private router: Router) {
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

  ngOnInit() {
    const entityKindId = this.route.snapshot.queryParams.entityKindId;
    this.apollo.watchQuery<any>({
      query: EntityQuery,
      variables: { id: entityKindId }
    }).valueChanges.subscribe(({ data }) => {
      if (data.EntityKind.length !== 1) {
        return;
      }
      this.dataSource.data = data.EntityKind[0].entities;
    });
  }
}
