import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfbrakeDetailComponent } from './surfbrakes/surfbrake-detail/surfbrake-detail.component';
import { SurfbrakesComponent } from './surfbrakes/surfbrakes.component';

const routes: Routes = [
  {
    path: 'surfbrake',
    component: SurfbrakeDetailComponent
  },
  {
    path: '',
    component: SurfbrakesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
