import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatepollService } from './createpoll.service';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css'],
})
export class CreatepollComponent implements OnInit {
  pollform = new FormGroup({
    title: new FormControl('', [Validators.required]),
    option1: new FormControl('', [Validators.required]),
    option2: new FormControl('', [Validators.required]),
    option3: new FormControl('', [Validators.required]),
    option4: new FormControl('', [Validators.required]),
  });
  showMe = false;
  get title() {
    return this.pollform.get('title');
  }
  get option1() {
    return this.pollform.get('option1');
  }
  get option2() {
    return this.pollform.get('option2');
  }
  get option3() {
    return this.pollform.get('option3');
  }
  get option4() {
    return this.pollform.get('option4');
  }

  constructor(private createpollservice: CreatepollService) { }

  ngOnInit(): void { }
  onSubmit() {
    console.log(this.pollform.value);
    this.createpollservice
      .getData(
        this.pollform.value.title,
        this.pollform.value.option1,
        this.pollform.value.option2,
        this.pollform.value.option3,
        this.pollform.value.option4
      )
      .subscribe((data: any) => {
        console.log(data.data);

        if (data.error === 0) {
          this.showMe = true;
          this.pollform.reset({});
        }
      });
  }
}
