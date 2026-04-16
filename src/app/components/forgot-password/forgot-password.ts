import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validators/password-match.validator';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {

  forgotPassword : FormGroup

  constructor(private fb : FormBuilder) {
    this.forgotPassword = fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]]
    }, { validators: passwordMatchValidator() });
  }

  getControls(controls : string){
    return this.forgotPassword.get(controls)
  }

  submitForgotPassword(){
    if(this.forgotPassword.invalid){
      return this.forgotPassword.markAllAsTouched()
    }
  }
}
