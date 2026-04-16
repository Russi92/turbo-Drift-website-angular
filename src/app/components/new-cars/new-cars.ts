import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ApiNewCars } from '../../services/api-new-cars';
import { InewCars } from '../../models/inew-cars';
import { CurrencyPipe, NgOptimizedImage, NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-cars',
  imports: [RouterLink, CurrencyPipe, NgOptimizedImage, FormsModule, NgFor],
  templateUrl: './new-cars.html',
  styleUrl: './new-cars.css',
})
export class NewCars implements OnInit{

  searchText = '';

  // newCars : InewCars[] = [] as InewCars[];

  newCars: InewCars[] = [];
  
  filteredCars : InewCars[] = [];

  constructor(private _ApiNewCars : ApiNewCars,
              private router : Router,
              // private cdr : ChangeDetectorRef      
    ){}

  ngOnInit(): void {
    
    this._ApiNewCars.getAllNewCars().subscribe({
      next : (res) =>{
        console.log(res);
        this.newCars = res;
        this.filteredCars = res;
        // this.cdr.detectChanges();
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

  logIn(){
    alert("You are not logIn!!")
    this.router.navigateByUrl('/logIn')
  }

  filterCars(){
    if(!this.searchText){
       this.filteredCars = this.newCars;
       return;
    }
    this.filteredCars = this.newCars.filter(car => {
      return car.name.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
}
