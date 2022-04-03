import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  wishlist:number=0
  item:number=0;
  color= "green";
  Users:any;
  errorMessage:string = 'loading....';

 position:boolean = false;
 position1:boolean = false;
 position2:boolean = false;
 position3:boolean = false;



  constructor() { }

  ngOnInit(): void {
  } 
 addtocart(){
   this.item=this.item+1; 
  }
 
 abc( )  {
   if (this.position = this.position)
        {
         this.position = !this.position;
         this.wishlist = this.wishlist-1;
         console.log('remove from wish'); 
         }
      else {
          this.position = !this.position;
          this.wishlist = this.wishlist+1;
          console.log(' Add to wish');}
       }
  abcd( )  {
   if (this.position1 = this.position1){
     this.position1 = !this.position1;
     this.wishlist = this.wishlist-1;
     console.log('remove from wish'); 
    }
    else {
     this.position1 = !this.position1;
     this.wishlist = this.wishlist+1;
     console.log(' Add to wish');}
  }
  abcde( )  {
   if (this.position2 = this.position2){
     this.position2 = !this.position2;
     this.wishlist = this.wishlist-1;
     console.log('remove from wish'); 
    }
    else {
     this.position2 = !this.position2;
     this.wishlist = this.wishlist+1;
     console.log(' Add to wish');}
  }
 abcdef( )  {
   if (this.position3 = this.position3){
    this.position3 = !this.position3;
     this.wishlist = this.wishlist-1;
     console.log('remove from wish'); 
    }
    else {
     this.position3 = !this.position3;
     this.wishlist = this.wishlist+1;
     console.log(' Add to wish');}
  }

 




}



