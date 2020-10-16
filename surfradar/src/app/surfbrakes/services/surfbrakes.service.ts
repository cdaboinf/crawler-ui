import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurfbrakeData } from '../models/surfbrake-data';

@Injectable({
  providedIn: 'root'
})
export class SurfbrakesService {

  constructor(private httpClient: HttpClient) { }

  getSurfbrakeById(id: string): Observable<SurfbrakeData>{
    let url = "http://localhost:8000/surfbrakes/1/";
    var result = this.httpClient.get<SurfbrakeData>(url);

    return result;
  }
}
