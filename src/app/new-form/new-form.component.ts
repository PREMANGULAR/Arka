import { Component, OnInit } from '@angular/core';
import { MineService } from '../Services/mine.service';

@Component({
  selector: 'appnewform',
  template: `
   <!-- <h1 appOwn >Angular</h1>
   <h1 style="color:red">Angular</h1>
   <h1  [style.color]= "'green'">Angular</h1>
   <button (click)="storeName()">Add name</button>
   <button  (click)="SpecificDelete()">delete name</button>
   <button  (click)="showNmae()">show name in console</button>
   <button  (click)="deleteName()">remove data</button>
   <h1>{{mySet2}}</h1>-->
   <h2>App new Form works</h2>
   
   
    
  `,
  styles: [ `
    .one{ 
      background-color:red;
    }
    .two{ color:green;}
    `]
})
export class NewFormComponent implements OnInit {

 person = 'prem'
 mySet2 : string = ''
  constructor(private service:MineService) { 
  }

  ngOnInit(): void {
  
  }
  inc(){
    this.service
  }
  dec(){
    this.service
  }
  storeName(){
    localStorage.setItem("person",JSON.stringify(this.person));
  }
  showNmae(){
     let mySet1 = JSON.parse(localStorage.getItem('person')|| '{}');
    console.log(mySet1);
    this.mySet2 = mySet1;
  }
  SpecificDelete(){
    localStorage.removeItem('person');
  }
  deleteName(){
    localStorage.clear();
  }
}
