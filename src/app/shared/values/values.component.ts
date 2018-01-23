import { Component, Input, OnInit } from '@angular/core';
import gql from 'graphql-tag';

@Component({
  selector: 'thermo-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements OnInit {
  _values: any[];
  @Input()
  set values(values: any[]) {
    if (values) {
      this._values = values.slice().sort((a, b) => {
        if (a.sensor.produces < b.sensor.produces) {
          return -1;
        }

        if (a.sensor.produces > b.sensor.produces) {
          return 1;
        }

        return 0;
      });
    } else {
      this._values = values;
    }
  }

  get values() {
    return this._values;
  }

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
