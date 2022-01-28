import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm =new FormGroup({
    user:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(2)]),
   
  })
 
  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }


  constructor(private loginService:LoginService , private _router:Router) { }

  ngOnInit(): void {
  }
 
  login(){
    this.loginService.login(this.loginForm.value.user, this.loginForm.value.password).subscribe((data: any)=>{
      console.log(data,'=========',this.loginForm.value);
      localStorage.setItem('token',data.token)
       if(data.token){
     
this._router.navigate(['../dashboard'])

       }else{
         alert("wrong")
       }
    
     
     
    }) 
    
   
  }

  
  

}
