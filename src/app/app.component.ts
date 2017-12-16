import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

const UserQuery: DocumentNode = gql`{
  User {
    email
  }
}
`;

@Component({
  selector: 'thermo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private loading = false;
  private users: any[] = null;

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery<any>({
      query: UserQuery
    }).valueChanges
      .subscribe(({ data }) => {
        this.loading = data.loading;
        this.users = data.User;
      });
  }
}
