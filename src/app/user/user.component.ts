import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { MineService } from '../Services/mine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  studentUser:any
  constructor(private service:MineService, private route:ActivatedRoute) { }


  ngOnInit()  {
    let id = this.route.snapshot.params['id'];
   this.service.getUser(id).subscribe((u)=>{
      this.studentUser = u
      console.log(u);
      console.log(id);
      })
    
  }
  


}



