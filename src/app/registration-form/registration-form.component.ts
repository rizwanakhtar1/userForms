import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  @ViewChild('confirmPassword', { static: true })
  confirmPassword!: NgForm;
  name: string = '';
  email: string = '';
  password: string = '';
  
  phone: string = '';

  userModel = new User('','','','','');

  onSubmit(){
    alert("Form Submitted");
    console.log("Form Submitted", this.userModel);
  }
  checkPasswords() {
    if (this.userModel.password !== this.userModel.confirmPassword) {
        this.confirmPassword.control.setErrors({ mismatch: true });
    } else {
        this.confirmPassword.control.setErrors(null);
    }
  }
}


