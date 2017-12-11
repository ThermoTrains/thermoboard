import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'thermo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thermo';

  constructor(private apollo: Apollo) {
    let observable = apollo.query({query: gql`{
  User {
    email
  }
}
`});
    observable.toPromise().then(console.log);
  }
}
