import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signupForm ! : FormGroup;
  submitted = false;
  constructor(private FormBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      firstName:['',[Validators.required,Validators.maxLength(10)]],
      lastName:['',[Validators.required,Validators.maxLength(5)]],
      email:['', [Validators.required, Validators.email]],
      mobile:['',[ Validators.required,Validators.min(0),Validators.max(10) ]],
      PassWord:['', [ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
      alert("Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['app-login2']);
    })
  }
  get registerFormControl() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.signupForm.value);
    }
  }

}

