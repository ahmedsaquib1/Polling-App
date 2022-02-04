import { Component } from '@angular/core'

import { Data } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Polling-app'
  ngOnInit() {
    this.checkUser()
  }
  isLoggedIn: boolean = false
  checkUser() {
    let data = localStorage.getItem('token')
    console.log(data, '====================')
    if (data) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }
}
