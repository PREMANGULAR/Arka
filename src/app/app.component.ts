import { Component, OnInit } from '@angular/core';
import { MineService } from './Services/mine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'Angular Project sample testing';
  //subjects=['atchuth','kumar','prem'];

 // subject=["atchuth",];

 /*childData:string | undefined;

  parentMothed(data: string | undefined){
    this.childData = data;
    console.log(data);
  }*/
  color= "green";
  Condition:boolean = false;
  sub1:any;
  value: number = 100;
 
  childData:string | undefined;
  constructor(private serv:MineService){}

   ngOnInit(): void {
       this.Condition = this.serv.ParentFunction();
       this.sub1 = this.serv.sharingData.subscribe((data:any)=>{
         this.Condition = data;
       })
   }
  

  parentMothed(data: string | undefined){
    this.childData = data;
    console.log(data);
  }

  ABC(){
  window.alert('Welcome');

  }
 
}
