import { Component, OnInit } from '@angular/core';
import { IcarsSales } from '../../models/icars-sales';
import { ApiCarsSales } from '../../services/api-cars-sales';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sold-cars',
  imports: [CurrencyPipe],
  templateUrl: './sold-cars.html',
  styleUrl: './sold-cars.css',
})
export class SoldCars implements OnInit{

  soldCars : IcarsSales[] = [];

  constructor (private _APiSoldCars : ApiCarsSales){}
  ngOnInit(): void {
     this._APiSoldCars.getAllCarsSales().subscribe({
      next : (res) => {
        this.soldCars = res
      },
      error : (err) => {
        console.log(err);
        
      }
    })
  }

}
