import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManageRoutingModule } from './staff-manage-routing.module';
import { StaffManageComponent } from './staff-manage.component';


@NgModule({
  declarations: [
    StaffManageComponent
  ],
  imports: [
    CommonModule,
    StaffManageRoutingModule
  ]
})
export class StaffManageModule { }
