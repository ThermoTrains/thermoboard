import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'thermo-chart-record-histogram',
  templateUrl: './chart-record-histogram.component.html',
  styleUrls: ['./chart-record-histogram.component.scss']
})
export class ChartRecordHistogramComponent implements OnInit {
  @Input() set timestamps(timestamps: string[]) {
    if (!timestamps) {
      return;
    }

    const counts = [];
    this.chart.labels = [];
    this.chart.data.datasets[0].data = [];

    timestamps
      .map(timestamp => moment(timestamp))
      .sort(function (left, right) {
        return left.diff(right);
      })
      .reduce((previous, current) => {
        if (current.diff(previous) > 0) {
          this.chart.labels.push(current);
          counts.push(1);
        } else {
          counts[counts.length - 1]++;
        }
        return current;
      }, moment('2010-01-01'));

    this.chart.labels.forEach((day, i) => this.chart.data.datasets[0].data.push({
      x: day,
      y: counts[i]
    }));

    this.chart.update();
  }

  @ViewChild('myCanvas') canvasRef: ElementRef;
  chart: any;

  constructor() {
  }

  public ngOnInit(): void {
    this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.canvasRef.nativeElement, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          data: [],
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'week'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
        }
      }
    });
  }
}
