import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [RouterOutlet],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {

  constructor(private router : Router){

  }

  rentShow(){
    this.router.navigateByUrl('/service/rent-show')
  }

  soldCars(){
    this.router.navigateByUrl('/service/sold-cars')
  }

  carMaintenance(){
    this.router.navigateByUrl('/service/car-maintenance')
  }
}
