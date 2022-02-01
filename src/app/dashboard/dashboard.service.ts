import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  PollsService {

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/list_polls`);
 
  }

}


