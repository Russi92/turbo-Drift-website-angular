import { Component, OnInit, } from '@angular/core';
import { NewCars } from '../new-cars/new-cars';
import { InewCars } from '../../models/inew-cars';
import { Observable } from 'rxjs';
import { ApiNewCars } from '../../services/api-new-cars';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-total-price-car',
  imports: [NewCars, CurrencyPipe],
  templateUrl: './total-price-car.html',
  styleUrl: './total-price-car.css',
})
export class TotalPriceCar implements OnInit {
  number = 0
name:string='russi'
  selectCars: InewCars[] = []
  brands: string[] = []
  constructor(private _ApiNewCarsSelect: ApiNewCars) { }

  ngOnInit(): void {
    this._ApiNewCarsSelect.getAllNewCars().subscribe({
      next: (res) => {
        this.selectCars = res;
        this.brands = [...new Set(res.map(car => car.brand))]
      },
      error: (err) => {
        console.log(err);
      }
    })
  }




}
