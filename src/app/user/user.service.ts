import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public user() {
    return this.httpClient.get(
      `https://secure-refuge-14993.herokuapp.com/list_users`,
    )
  }
}
