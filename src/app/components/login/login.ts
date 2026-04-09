import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm : FormGroup
  constructor(private fb : FormBuilder){
    this.loginForm = fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  login(){
    if(this.loginForm.invalid){
      return this.loginForm.markAllAsTouched()
    }else{
      console.log(this.loginForm.value);
    }
  }
}
