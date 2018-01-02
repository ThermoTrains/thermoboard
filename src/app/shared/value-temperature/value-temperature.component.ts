import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thermo-value-temperature',
  templateUrl: './value-temperature.component.html',
  styleUrls: ['./value-temperature.component.scss']
})
export class ValueTemperatureComponent implements OnInit {
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
