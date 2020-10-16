import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Surfbrake } from '../models/surfbrake';
import { SurfbrakesService } from '../services/surfbrakes.service';
import { LineChartComponent } from '../../tools/charts/line-chart/line-chart.component';
import { SurfbrakeData } from '../models/surfbrake-data';
import { SurfTide } from '../models/surf-tide';

@Component({
  selector: 'app-surfbrake-detail',
  templateUrl: './surfbrake-detail.component.html',
  styleUrls: ['./surfbrake-detail.component.css']
})

export class SurfbrakeDetailComponent implements OnInit {
  @Input() surfbrake: Surfbrake;
  @Input() tide: SurfTide[];

  constructor(private surfbrakesService: SurfbrakesService) { 
  }

  ngOnInit() {
    this.surfbrake = new Surfbrake();
    this.surfbrakesService.getSurfbrakeById("1").subscribe(
      (data: SurfbrakeData) => {
        this.surfbrake = data.surfbrake;
        this.tide = data.tide;
      });
  }
}
