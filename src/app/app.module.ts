import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { MineService } from './Services/mine.service';
import { UsersComponent } from './Users/users.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { Login2Component } from './login2/login2.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ExampleComponent } from './example/example.component';
import { Example2Component } from './example2/example2.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NewFormComponent } from './new-form/new-form.component';
import { FormComponent } from './form/form.component';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { SecondRoutingModule } from './second/second-routing.module';
import { OwnDirective } from './own.directive';
import { SampleComponent } from './sample/sample.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    SigninComponent,
    Login2Component,
    ExampleComponent,
    Example2Component,
    NewFormComponent,
    FormComponent,
    MyPipePipe,
    SqrtPipe,
    OwnDirective,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    ScrollViewModule,
    SecondRoutingModule
  ],
  providers: [MineService],
  bootstrap: [AppComponent],

})
export class AppModule { }
