import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {

  constructor(private router : Router){

  }

  rentShow(){
    this.router.navigateByUrl('/rent-show')
  }

}
