import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {

  contactUsForm : FormGroup
  constructor(private fb : FormBuilder, private toastr : ToastrService){
    this.contactUsForm = fb.group({
      fName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      message : ['', [Validators.required]]
    })
  }

  getControls(controls : string){
    return this.contactUsForm.get(controls)
  }

  sendMessage(){
    if(this.contactUsForm.invalid){
      return this.contactUsForm.markAllAsTouched()
    }else{
      this.toastr.success('Message is sent successfully!');
    }
  }
}
