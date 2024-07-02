import {Component} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from '../../../core/services/auth.service'

@Component({
  selector: 'tl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  // ---- Создали Form Group ----
  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,5}$')
      ]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    rememberMe: new FormControl(false, {nonNullable: true})
  })

  constructor(private authService: AuthService) {
  }

  // ---- Считали значение email ----
  get email() {
    return this.loginForm.get('email')
  }

  // ---- Считали значение password ----
  get password() {
    return this.loginForm.get('password')
  }

  // ---- Работа при submit ----
  onLoginSubmit() {
    const value = this.loginForm.value
    this.authService.logIn(value)
  }
}
