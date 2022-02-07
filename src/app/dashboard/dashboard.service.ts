import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PollsService {
  constructor(private httpClient: HttpClient) {}
  public getData() {
    return this.httpClient.get(
      `https://secure-refuge-14993.herokuapp.com/list_polls`
    );
  }
  public vote(id:string,option_text:string){
    return this.httpClient.get(`https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${option_text}`);
  }
}
