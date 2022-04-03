import { Component, OnInit } from '@angular/core';
import { MineService } from '../Services/mine.service';

@Component({
  selector: 'appform',
  template: `
  
   <h1>form works</h1>
   
  `,
  styles: [
  ]
  
})
export class FormComponent implements OnInit {
  count:number = 0
  constructor(private service:MineService) { }

  ngOnInit() {
   /* this.count = this.service.getItemCount();

    let sub1 = this.service.SharingData.subscribe((sharedData: any) => {
      this.count = sharedData.length;
    })*/
   
  }

}
