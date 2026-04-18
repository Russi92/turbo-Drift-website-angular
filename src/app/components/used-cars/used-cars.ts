import { Component, OnInit } from '@angular/core';
import { ApiUsedCars } from '../../services/api-used-cars';
import { Router } from '@angular/router';
import { IusedCars } from '../../models/iused-cars';
import { CurrencyPipe, NgOptimizedImage, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-used-cars',
  imports: [CurrencyPipe, NgOptimizedImage, FormsModule, NgForOf],
  templateUrl: './used-cars.html',
  styleUrl: './used-cars.css',
})
export class UsedCars implements OnInit {

searchText='';

  usedCars: IusedCars[] = [];

filteredCars:IusedCars[]=[];

  constructor(private _ApiUsedCars: ApiUsedCars,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._ApiUsedCars.getAllUsedCars().subscribe({
      next: (res) => {
        this.usedCars = res;
this.filteredCars=res;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  logIn() {
    alert('You are not logIn!!')
    this.router.navigateByUrl('/logIn')
  }

filterCars(){
if(!this.searchText){
this.filteredCars=this.usedCars
return
}

this.filteredCars=this.usedCars.filter(car => {
return car.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
})
}
}
