import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  signupService {

  constructor(private httpClient: HttpClient) { }

  public signup(username:string, password:string,role:string){
    return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`);
  }

}