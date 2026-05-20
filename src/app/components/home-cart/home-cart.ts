import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cart',
  imports: [],
  templateUrl: './home-cart.html',
  styleUrl: './home-cart.css',
})
export class HomeCart {

  constructor(private router:Router){}

  register() {
    this.router.navigateByUrl('/register');
  }
}
