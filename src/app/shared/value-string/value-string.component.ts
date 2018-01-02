import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thermo-value-string',
  templateUrl: './value-string.component.html',
  styleUrls: ['./value-string.component.scss']
})
export class ValueStringComponent implements OnInit {
  @Input() value: any;

  constructor() {
  }

  ngOnInit() {
  }

}
