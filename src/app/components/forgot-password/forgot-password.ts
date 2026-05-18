import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validators/password-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {

  forgotPassword : FormGroup

  constructor(private fb : FormBuilder , private router:Router) {

    this.forgotPassword = fb.group({
      email : ['', [Validators.required, Validators.email]],
      // password : ['', [Validators.required]],
      // confirmPassword : ['', [Validators.required]]
    }, { validators: passwordMatchValidator() });
  }

  getControls(controls : string){
    return this.forgotPassword.get(controls)
  }

  // submitForgotPassword(){
  //   if(this.forgotPassword.invalid){
  //     return this.forgotPassword.markAllAsTouched()
  //   }
  //   this.router.navigate(['/otp']);
  // }
  submitForgotPassword() {
    if (this.forgotPassword.invalid) {
      this.forgotPassword.markAllAsTouched();
      console.log(this.forgotPassword.valid);
console.log(this.forgotPassword.value);
      return;
      
    }
  
    this.router.navigateByUrl('/otp');
  }
  // submitForgotPassword(){
  //   this.router.navigate(['/otp']);
  // }
}
