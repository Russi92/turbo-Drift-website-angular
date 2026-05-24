import { Component, OnInit } from '@angular/core';
import { ApiRentShow } from '../../services/api-rent-show';
import { IrentShow } from '../../models/irent-show';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-rent-show',
  imports: [CurrencyPipe],
  templateUrl: './rent-show.html',
  styleUrl: './rent-show.css',
})
export class RentShow implements OnInit{

  rentShow : IrentShow [] = [];

  constructor(private _ApiRentShow : ApiRentShow){}
  ngOnInit(): void {
    this._ApiRentShow.getAllRentShow().subscribe({
      next : (res) => {
        this.rentShow = res
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
  test(){
    console.log('done');
    
  }
}
