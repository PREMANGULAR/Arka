import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './Users/users.component';
import { SigninComponent } from './signin/signin.component';
import { Login2Component } from './login2/login2.component';
import { FormComponent } from './form/form.component';
import { NewFormComponent } from './new-form/new-form.component';
import { SampleComponent } from './sample/sample.component';
import { Example2Component } from './example2/example2.component';

const routes: Routes = [

{ path: 'app-example2' ,
  component:Example2Component
},
{ path: 'app-example2/:id' ,
  component:Example2Component
},
{ path: 'home' ,
  component:HomeComponent
},



{ path: 'app-root' ,
  component:AppComponent
},


{
  path: 'sample',
  component: SampleComponent,
  children: [
    { path: 'detail', component: SampleComponent },
    { path: 'newform', component: FormComponent, outlet: 'outlet1' },
    { path: 'appnewform', component: NewFormComponent, outlet: 'outlet2' },
  ],
},


{ path: 'app-login2' ,
  component: Login2Component
},

{ path:'users' ,component: UsersComponent,
},
{ path:'users/:id' ,component:UserComponent

},
  { path: 'users/:id/:posts' ,
  component: Example2Component,
  },
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


