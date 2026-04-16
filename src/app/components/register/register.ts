import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf, NgFor, JsonPipe],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registrationForm : FormGroup
  constructor(private fb : FormBuilder){

    this.registrationForm = fb.group({
      fName : ['', [Validators.required]],
      lName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]],
      // phone : ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      phone : fb.array([['', [Validators.required, Validators.pattern('^[0-9]+$')]]]),
      countries : ['', Validators.required],
      gender : ['', Validators.required]
    })
  }

  getControls(control : string){
    return this.registrationForm.get(control)
  }

  get phone(){
    return this.registrationForm.get('phone') as FormArray
  }

  addNewInput(){
    this.phone.push(this.fb.control('', [Validators.pattern('^[0-9]+$')]))
  }

  removeInput(index : number){
    if(index === 0) return;
    this.phone.removeAt(index)
  }

  register(){
    if(this.registrationForm.invalid){
      return this.registrationForm.markAllAsTouched();
    }else{
      return console.log(this.registrationForm.value);
      
    }
  }
}
