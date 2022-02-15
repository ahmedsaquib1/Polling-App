import { ValueConverter } from '@angular/compiler/src/render3/view/template'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from '../login/login.service'
import { PasswordValidators } from './shared/password.component'
import { signupService } from './signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup(
    {
      user: new FormControl(null, [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repassword: new FormControl('', [Validators.required]),
      role: new FormControl(''),
    },
    { validators: PasswordValidators },
  )

  showMe = false
  httpClient: any
  username: any
  loginForm: any

  signup() {
    console.warn(this.signupForm.value)
  }

  get user() {
    return this.signupForm.get('user')
  }
  get password() {
    return this.signupForm.get('password')
  }
  get repassword() {
    return this.signupForm.get('repassword')
  }
  constructor(
    private signupService: signupService,
    private loginService: LoginService,
    private _router: Router,
  ) {}

  ngOnInit(): void {}
  Regis() {
    console.log(this.signupForm.value)
    this.signupService
      .signup(
        this.signupForm.value.user,
        this.signupForm.value.password,
        this.signupForm.value.role,
      )
      .subscribe((data: any) => {
        localStorage.setItem('token', data.token)
        if (data.error === 1) {
          this.showMe = true
        } else {
          this.loginService
            .login(this.signupForm.value.user, this.signupForm.value.password)
            .subscribe((logindata: any) => {
              if (logindata.token) {
                this._router.navigate(['../dashboard'])
              }
            })
        }
      })
  }
}
