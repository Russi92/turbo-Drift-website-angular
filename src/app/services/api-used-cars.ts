import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IusedCars } from '../models/iused-cars';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiUsedCars {

  constructor (private httpClient : HttpClient){}

  getAllUsedCars(): Observable<IusedCars[]>{
    return this.httpClient.get<IusedCars[]>(`${environment.baseURL}/usedCars`)
  }
}
