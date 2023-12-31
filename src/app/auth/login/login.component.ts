import { Component, OnInit, } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Validate } from 'src/app/residents/shared/helpers/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private loginFormBuilder: FormBuilder, private loginService: AuthService) {}

  inputType: string = 'password'
  isInputTypeText: boolean = false
  eyeIcon: string = 'assets/images/svg/show-password.svg'

  hideShowPassword(): void {
    this.isInputTypeText = !this.isInputTypeText
    this.isInputTypeText ? this.eyeIcon = 'assets/images/svg/show-password.svg' : 'assets/images/svg/hide-password.svg'
    this.isInputTypeText ? this.inputType = "text" : this.inputType = "password"
  }

  ngOnInit(): void { 
    this.loginForm = this.loginFormBuilder.group({
      email: ['', Validate.emailValidator],
      password: ['', Validate.passwordValidator]
    })
  }

  onLoginUser() {
      this.loginService.loginUser()
  }
}
