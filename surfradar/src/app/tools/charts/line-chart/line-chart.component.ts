import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SurfTide } from 'src/app/surfbrakes/models/surf-tide';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() data: SurfTide[]
  chart: Chart;
  wave: number[];
  time: Date[];

  constructor() { }

  ngOnInit() {
    this.wave = [];
    this.time = [];
    if(this.data!=null){
      this.drawChart(this.data);    
    }
  }

  ngOnChanges(){
    if(this.data!=null){
      this.drawChart(this.data);    
    }
  }

  drawChart (tideData: SurfTide[]): void {
    this.data.forEach((value) => {
      this.wave.push(value.value);
      this.time.push(value.date);
    }); 

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.time,
        datasets: [
          {
            data: this.wave,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
                hour: 'hA'
              }
            },
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}