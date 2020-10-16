import { Component, OnInit } from '@angular/core';
import { Surfbrake } from './models/surfbrake';
import { SurfbrakesService } from './services/surfbrakes.service';

@Component({
  selector: 'app-surfbrakes',
  templateUrl: './surfbrakes.component.html',
  styleUrls: ['./surfbrakes.component.css']
})
export class SurfbrakesComponent implements OnInit {
  surfbrake: Surfbrake;

  constructor(private surfbrakesService: SurfbrakesService) { }

  ngOnInit() {
  }

}
