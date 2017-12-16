import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const UserQuery: DocumentNode = gql`{
  User {
    email
  }
}
`;

@Component({
  selector: 'thermo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = null;

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery<any>({
      query: UserQuery
    }).valueChanges.subscribe(({ data }) => {
      this.users = data.User;
    });
  }

  ngOnInit() {
  }

}
