import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MineService } from '../Services/mine.service';



@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  loginForm ! : FormGroup;
  constructor(private FormBuilder:FormBuilder,
               private http:HttpClient
               ,private router:Router,
               private service:MineService) { }
              
  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email:['', [Validators.required, Validators.email]],
      PassWord:['', [ Validators.required,Validators.minLength(3),Validators.maxLength(10)]]
    })
  }
  Login(){
    this.service.Afunction(false);
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.PassWord === this.loginForm.value.PassWord 
        })
        if(user){
          alert("login successful");
          this.loginForm.reset();
          this.router.navigate(['app-home'])
          }
        else{
          alert("user not found");
        }
      }
      )
    }
}