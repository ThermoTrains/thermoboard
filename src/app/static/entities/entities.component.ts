import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatTableDataSource } from '@angular/material';

const EntityQuery = gql`
query EntityKind($id: ID!) {
  EntityKind(id: $id) {
    entities {
      id
      category
      serial_number
      exists_since
    }
  }
}
`;

@Component({
  selector: 'thermo-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  displayedColumns = ['category', 'serial_number', 'exists_since', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private route: ActivatedRoute,
              private apollo: Apollo) {
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
