import { Component, OnInit } from '@angular/core';
import { ApiCarMaintenance } from '../../services/api-car-maintenance';
import { IcarMaintenance } from '../../models/icar-maintenance';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-car-maintenance',
  imports: [CurrencyPipe],
  templateUrl: './car-maintenance.html',
  styleUrl: './car-maintenance.css',
})
export class CarMaintenance implements OnInit{

  carMaintenance : IcarMaintenance[] = [];

  constructor(private _ApiCarMaintenance : ApiCarMaintenance){}
  ngOnInit(): void {
    this._ApiCarMaintenance.getAllCarMaintenance().subscribe({
      next : (res) => {
        this.carMaintenance = res
      },
      error : (err) => {
        console.log(err);
        
      }
    })
  }



}
