import { Component, Input, OnInit } from '@angular/core';
import gql from 'graphql-tag';

@Component({
  selector: 'thermo-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  @Input() values: any[];

  constructor() {
  }

  ngOnInit() {
  }

}

export const valueFieldFragment = gql`
fragment valueFields on Value {
  id
  sensor {
    id
    name
    produces
  }
  string
  temperature
  number
  image
}
`;
