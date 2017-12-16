import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thermo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = null;

  constructor() {
  }

  ngOnInit() {
  }

}
