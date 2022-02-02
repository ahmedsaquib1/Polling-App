import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  CreatepollService {

  constructor(private httpClient: HttpClient) { }

  public getData(title:string,option1:string,option2:string,option3:string,option4:string){
    return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${option1}____${option2}____${option3}____${option4}`);
 
  }
  

}