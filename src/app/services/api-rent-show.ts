import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IrentShow } from '../models/irent-show';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiRentShow {

  constructor (private httpClient : HttpClient){}

  getAllRentShow() : Observable<IrentShow[]>{
    return this.httpClient.get<IrentShow[]>(`${environment.baseURL}/rentShow`)
  }

}
