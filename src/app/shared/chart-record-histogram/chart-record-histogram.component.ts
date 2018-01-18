import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'thermo-chart-record-histogram',
  templateUrl: './chart-record-histogram.component.html',
  styleUrls: ['./chart-record-histogram.component.scss']
})
export class ChartRecordHistogramComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  chart: any;

  constructor() {
  }

  public ngOnInit(): void {
    this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          data: [78.68, 60.17, 71.09, 34.25, 8.93, 57.89, 50.97, 9.01],
          fill: 'start'
        }]
      },
      options: {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        },
        plugins: {
          filler: {
            propagate: false
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: false,
              maxRotation: 0
            }
          }]
        }
      }
    });
  }
}
