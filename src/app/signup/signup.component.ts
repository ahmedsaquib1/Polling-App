import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './shared/password.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm= new FormGroup({
  user: new FormControl(null,[Validators.required]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  repassword: new FormControl('',[Validators.required])
},{validators:PasswordValidators});
signup(){
  console.warn(this.signupForm.value)
}
  
get user(){
  return this.signupForm.get('user');
}
get password(){
  return this.signupForm.get('password');
}
get repassword(){
  return this.signupForm.get('repassword');
}
  constructor() { }

  ngOnInit(): void {
  }

}
