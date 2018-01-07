import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thermo-value-temperature',
  templateUrl: './value-temperature.component.html',
  styleUrls: ['./value-temperature.component.scss']
})
export class ValueTemperatureComponent implements OnInit {
  @Input() value: any;
  temperatureInCelsius: string;

  constructor() {
  }

  ngOnInit() {
    const kelvin = this.value && this.value.temperature || 0;
    this.temperatureInCelsius = `${Math.round((kelvin - 273.15) * 10) / 10}° C`;
  }
}
