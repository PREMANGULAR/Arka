import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample',
  template: `
    <p>
      sample works!
    </p>
    <ul>
  <li><a [routerLink]="['detail']">Detail</a></li>
&nbsp;

  <button type="button" class="btn btn-success">
    <a [routerLink]="[{ outlets: { outlet1: ['newform'] } }]" [style.color]="'white'">show form component in Detail block</a>
</button>
&nbsp;
  <button type="button" class="btn btn-primary">
    <a [routerLink]="[{ outlets: { outlet2: ['appnewform'] } }]" [style.color]="'white'">show new form component in popup block</a>
</button>
&nbsp;

   <button type="button" class="btn btn-danger">
    <a [routerLink]="[{ outlets: { outlet2: null, outlet1: null } }]" [style.color]="'white'">Cancel</a>
   </button>
</ul>
 
<hr />
<div class="main">
  <h2>MAIN</h2>
  <router-outlet></router-outlet>
</div>
<div class="detail">
  <h2>Detail</h2>
  <router-outlet name="outlet1"></router-outlet>
</div>
<div class="detail">
  <h2>POPUP</h2>
  <router-outlet name="outlet2"></router-outlet>
</div>
     

    
    
  `,
  styles: [
    ` .card{
      width:80%;
      height: 80%;
  }
  .main {
  float: left;
  display: block;
  width: 20%;
  border: solid 1px red;
  min-height: 500px;
}

.detail {
  float: left;
  display: block;
  border: solid 1px blue;
  width: 30%;
  min-height: 500px;
}


    `
  ]
})
export class SampleComponent implements OnInit {

  constructor(private _router:ActivatedRoute) { }

  ngOnInit(): void {
  }

  
}
