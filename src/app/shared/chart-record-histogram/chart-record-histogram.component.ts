import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';

@Component({
  selector: 'thermo-chart-record-histogram',
  templateUrl: './chart-record-histogram.component.html',
  styleUrls: ['./chart-record-histogram.component.scss']
})
export class ChartRecordHistogramComponent implements OnInit {
  _timestamps: string[];
  @Input() set timestamps(timestamps: string[]) {
    this._timestamps = timestamps;
    this.updateData();
  }

  @ViewChild('myCanvas') canvasRef: ElementRef;
  chart: any;

  constructor() {
  }

  updateData() {
    if (!this._timestamps || !this.chart) {
      return;
    }

    const counts = [];
    const days = [];
    this.chart.data.datasets[0].data = [];

    this._timestamps
      .map(timestamp => moment(timestamp).startOf('day'))
      .sort(function (left, right) {
        return left.diff(right);
      })
      .reduce((previous, current) => {
        if (current.diff(previous) > 0) {
          days.push(current);
          counts.push(1);
        } else {
          counts[counts.length - 1]++;
        }
        return current;
      }, moment('2010-01-01'));

    days.forEach((day, i) => this.chart.data.datasets[0].data.push({
      x: day,
      y: counts[i]
    }));

    this.chart.update();
  }

  public ngOnInit(): void {
    this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels: false,
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
        animation: false, // disable inital and resize animation
        hover: {
          animationDuration: 0 // disable tooltip move animation
        },
        tooltips: {
          intersect: false,
          mode: 'nearest',
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'week',
              tooltipFormat: 'DD.MM.YYYY'
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

    if (this.chart.data.labels.length === 0) {
      this.updateData();
    }
  }
}
