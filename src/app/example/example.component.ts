import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { isTemplateExpression } from 'typescript';
import { SampleData } from "../interfaces/data";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  SampleData = [
    {
      name:'Atchuth',
      city:'Vizag',
      Number:9381057503,
      Bike:150
    },
    {
      name:'Prem',
      city:'Tuni',
      Number:7981138200,
      Bike:220
    },
    {
      name:'Vijay',
      city:'PrPeta',
      Number:6301157503,
      Bike:180
    }
  ]
  Movies: any[] = [
    {
      "name": "Avengers: Endgame"
    },
    {
      "name": "Good Boys"
    },
    {
      "name": "Playmobil: The Movie"
    },
    {
      "name": "Aquarela"
    },
    {
      "name": "Aladdin"
    }, 
    {
      "name": "Downton Abbey"
    }
  ];
  industryType: any[] = [
    {
      'type': 'Bollywood',
      'movies': [
        {
          "name": "Gully Boy"
        },
        {
          "name": "Manikarnika"
        },
        {
          "name": "Kalank"
        }        
      ]
    },
    {
      'type': 'Hollywood',
      'movies': [
        {
          "name": "Avengers: Endgame"
        },
        {
          "name": "Good Boys"
        },
        {
          "name": "Playmobil"
        },
        {
          "name": "Aquarela"
        }        
      ]
    }
  ];
  Fahrenheit:any;
  Celsius:any;
  interpolation = 'sample Interpolation data coming from Ts'
  property = false;
  ShowSet:any ;
  condition:Boolean = true;
  role:string ='admin';
  color="red";
  value:Boolean = false;
  
  todayDate = new Date();
  months = ["jan","feb","march","apr","may","jun","jul"];


  userForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  get email() {return this.userForm.get('email')}
  get password() {return this.userForm.get('password')}

      submit(data:any){
        console.log(data);
      }
      Submit(data:any){
        console.log(data);
      }
      Abc(){
        this.property = true
      }
      get(data:any){
        console.log(data);
        this.userForm.reset();
      }
      trackByFn(index:number, movie:any): number {
        return movie.id;
      }

}
