import { Component, OnInit } from '@angular/core';
import { PollsService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Data = [];
  //options=[]
  constructor(private pollsService: PollsService) {}

  ngOnInit(): void {
    this.polls();
  }
  polls() {
    this.pollsService.getData().subscribe((data: any) => {
      console.log(data);
      this.Data = data.data;
      //this.options=data.data;
    });
  }
  
}
