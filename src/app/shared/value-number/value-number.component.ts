import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thermo-value-number',
  templateUrl: './value-number.component.html',
  styleUrls: ['./value-number.component.scss']
})
export class ValueNumberComponent implements OnInit {
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
