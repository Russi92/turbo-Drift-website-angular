import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  imports: [],
  templateUrl: './otp.html',
  styleUrl: './otp.css',
})
export class Otp {

  constructor(private router:Router){}

  send(){
    alert('Check Your Email !')
  }

}
