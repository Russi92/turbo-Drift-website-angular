import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm : FormGroup
  constructor(private fb : FormBuilder,
              private router : Router        
    ){
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
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if(this.loginForm.invalid){
      return this.loginForm.markAllAsTouched()
    }

    if(email === 'admin@gmail.com' && password === '123456789'){
      this.router.navigateByUrl('/home')
      console.log(this.loginForm.value);
      alert('you are login ..Thank you .. Welcome To Turbo & Drift')
    }else{
      alert('Wrong email or password!')
    }
  }
}
