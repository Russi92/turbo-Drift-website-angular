import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InewCars } from '../models/inew-cars';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiNewCars {
  
  constructor(private HttpClient : HttpClient){}

  getAllNewCars(): Observable<InewCars[]>{
    return this.HttpClient.get<InewCars[]>(`${environment.baseURL}/newCars`)
  }

}
