import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core/animations/router.transition';

const EntityKindQuery: DocumentNode = gql`{
  EntityKind {
    id
    name
    manufacturer
  }
}
`;

@Component({
  selector: 'thermo-entity-kinds',
  templateUrl: './entity-kinds.component.html',
  styleUrls: ['./entity-kinds.component.scss']
})
export class EntityKindsComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  entityKinds: any[] = null;

  constructor(private apollo: Apollo) {
    this.apollo.watchQuery<any>({
      query: EntityKindQuery
    }).valueChanges.subscribe(({ data }) => {
      this.entityKinds = data.EntityKind;
    });
  }

  ngOnInit() {
  }

}
