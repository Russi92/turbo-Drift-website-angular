import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IcarsSales } from '../models/icars-sales';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiCarsSales {

  constructor (private HttpClient : HttpClient){}

  getAllCarsSales() : Observable<IcarsSales[]> {
    return this.HttpClient.get<IcarsSales[]>(`${environment.baseURL}/carsSales`)
  }
}
