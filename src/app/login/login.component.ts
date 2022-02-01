import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';
import { NgbTimepickerI18nDefault } from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-i18n';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),


  })
  showMe = false;


  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }


  constructor(private loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.loginForm.value.user, this.loginForm.value.password).subscribe((data: any) => {
     
      localStorage.setItem('token', data.token)
      if (data.token) {

        this._router.navigate(['../dashboard'])

      } else {
        this.showMe = true;

      }



    })


  }




}
