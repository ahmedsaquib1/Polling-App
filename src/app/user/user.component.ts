import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Data = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user();
  }
  user() {
    this.userService.user().subscribe((data: any) => {
      console.log(data, "===========")
      this.Data = data.data;
    })
  }

}
