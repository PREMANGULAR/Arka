import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
