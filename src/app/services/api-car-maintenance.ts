import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IcarMaintenance } from '../models/icar-maintenance';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiCarMaintenance {

  constructor(private HttpClient : HttpClient){}

  getAllCarMaintenance() : Observable<IcarMaintenance[]>{
    return this.HttpClient.get<IcarMaintenance[]>(`${environment.baseURL}/carMaintenance`)
  }
  
}
