import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(username:string, password:string){
    return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`);
  }

}