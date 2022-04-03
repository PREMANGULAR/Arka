import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MineService } from '../Services/mine.service';

@Component({
  selector: 'app-Users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 student :any

  constructor(private service: MineService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((res)=>{
      this.student = res
    })
    
  }
  
  get(){
   
  }
  /*abc(){
    this.condition = !this.condition;
  }
  cde(){
    this.color = "green"; 
  }
  cdea(){
    this.color = "red";
  }
  cdef(){
    this.color = "yellow";

  }*/

 
 
  

 

}
