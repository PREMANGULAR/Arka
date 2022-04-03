import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MineService } from '../Services/mine.service';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  name = 'angular'
  student:any
  constructor(private service:MineService, private route:ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.route);
   let id = this.route.snapshot.params['id'];
   this.service.getPost().subscribe((res:any)=>{
    this.student = res.filter ((el:any) => el.userId == id);
      console.log(res);
      console.log(id);
    })  
    
  }
  
}
