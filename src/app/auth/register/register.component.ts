import { Component, OnInit, } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Validate } from 'src/app/residents/shared/helpers/validators';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup

  constructor(private registerFormBuilder: FormBuilder) {}

  inputType: string = 'password'
  isInputTypeText: boolean = false
  eyeIcon: string = 'assets/images/svg/show-password.svg'

  hideShowPassword(): void {
    this.isInputTypeText = !this.isInputTypeText
    this.isInputTypeText ? this.eyeIcon = 'assets/images/svg/show-password.svg' : 'assets/images/svg/hide-password.svg'
    this.isInputTypeText ? this.inputType = "text" : this.inputType = "password"
  }

  ngOnInit(): void { 
    this.registerForm = this.registerFormBuilder.group({
      fullName: ['', Validate.nameValidator],
      email: ['', Validate.emailValidator],
      password: ['', Validate.passwordValidator]
    })
  }

  toggleAgreement() {
    
  }

  onRegisterUser() {
      
  }
}
