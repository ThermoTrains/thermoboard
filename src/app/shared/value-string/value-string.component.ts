import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thermo-value-string',
  templateUrl: './value-string.component.html',
  styleUrls: ['./value-string.component.scss']
})
export class ValueStringComponent implements OnInit {
  _value: string;
  @Input() set value(value: any) {
    if (value && value.string) {
      this._value = value.string.split('\n').join('<br>');
    } else {
      this._value = value;
    }
  }

  get value() {
    return this._value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
