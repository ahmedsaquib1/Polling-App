import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  http: any;
  constructor(private httpClient: HttpClient) {}
 
  public vote(id:string,option_text:string){
      
    const token = localStorage.getItem('access_token')
    const httpOptions = {
        headers: new HttpHeaders({
          'acess_token':  token 
        })
      };
      return this.http.get(`https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${option_text}`, httpOptions);
  }
}