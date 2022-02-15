
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VoteService } from './poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})
export class PollComponent implements OnInit {
  pollsForm = new FormGroup({
   option_text: new FormControl(''),
  });
  @Input() poll: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {}
  onSubmit(){
    
    this.voteService.vote(this.poll._id,this.pollsForm.value.option_text).subscribe((_data: any ) => {
    
    })
console.log(this.pollsForm.value.option_text);
console.log(this.poll._id);
  }
  
}
