import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'thermo-chart-entity-kind',
  templateUrl: './chart-entity-kind.component.html',
  styleUrls: ['./chart-entity-kind.component.scss']
})
export class ChartEntityKindComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  chart: any;

  constructor() {
  }

  ngOnInit() {
    this.chart = new Chart(this.canvasRef.nativeElement, {
      type: 'pie',
      data: {
        labels: ['DPZ', 'DTZ', 'DTZ+', 'IC2000', 'NINA'],
        datasets: [{
          data: [10, 15, 20, 25, 30],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ]
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
      }
    });
  }
}
