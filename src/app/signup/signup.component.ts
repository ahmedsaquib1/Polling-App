import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidators } from './shared/password.component';
import { signupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required]),
    role:new FormControl('admin')

  }, { validators: PasswordValidators });
  signup() {
    console.warn(this.signupForm.value)
  }

  get user() {
    return this.signupForm.get('user');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get repassword() {
    return this.signupForm.get('repassword');
  }
  constructor(private signupService: signupService, private _router: Router) { }

  ngOnInit(): void {
  }
  Regis() {
    console.log(this.signupForm.value)
    this.signupService.login(this.signupForm.value.user, this.signupForm.value.password, this.signupForm.value.role).subscribe((data: any) => {
      console.log(data, '=======', this.signupForm.value);
      localStorage.setItem('token', data.token)
      if (data.token) {
        this._router.navigate(['../dashboard'])
      } else {

      }
    })
  }
}
