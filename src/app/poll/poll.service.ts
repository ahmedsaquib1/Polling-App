import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  http: any;
  constructor(private httpClient: HttpClient) {}

  public vote(_id: string, option_text: string) {
    const acces_token = localStorage.getItem('access_token') ?? [];

    const httpOptions = {
      headers: new HttpHeaders({
        access_token: acces_token,
      }),
    };

    return this.httpClient.get(
      `https://secure-refuge-14993.herokuapp.com/do_vote?id=${_id}&option_text=${option_text}`,
      httpOptions
    );
  }
}
