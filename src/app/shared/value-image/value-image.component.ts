import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'thermo-value-image',
  templateUrl: './value-image.component.html',
  styleUrls: ['./value-image.component.scss']
})
export class ValueImageComponent implements OnInit {
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
