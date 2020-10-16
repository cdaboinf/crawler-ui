import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurfbrakesComponent } from './surfbrakes/surfbrakes.component';
import { SurfbrakeDetailComponent } from './surfbrakes/surfbrake-detail/surfbrake-detail.component';
import { SurfbrakesService } from './surfbrakes/services/surfbrakes.service';
import { LineChartComponent } from './tools/charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SurfbrakesComponent,
    SurfbrakeDetailComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SurfbrakesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
