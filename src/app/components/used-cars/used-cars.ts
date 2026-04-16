import { Component, OnInit } from '@angular/core';
import { ApiUsedCars } from '../../services/api-used-cars';
import { Router } from '@angular/router';
import { IusedCars } from '../../models/iused-cars';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-used-cars',
  imports: [CurrencyPipe, NgOptimizedImage],
  templateUrl: './used-cars.html',
  styleUrl: './used-cars.css',
})
export class UsedCars implements OnInit{
  usedCars : IusedCars[] = [] as IusedCars[];
  constructor(private _ApiUsedCars : ApiUsedCars,
              private router : Router
    ){}

  ngOnInit(): void {
     this._ApiUsedCars.getAllUsedCars().subscribe({
      next : (res) => {
        this.usedCars = res;
      },
      error : (err) => {
        console.log(err);
        
      }
    })
  }

  logIn(){
    alert('You are not logIn!!')
    this.router.navigateByUrl('/logIn')
  }

}
