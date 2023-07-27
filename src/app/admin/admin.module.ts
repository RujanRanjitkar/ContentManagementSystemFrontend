// src/app/admin/admin.module.ts

import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ApprovalComponent } from './approval/approval.component';
import { AdminRoutingModule } from './admin.routing';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    RequestComponent,
    HomeComponent,
    ApprovalComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    FormsModule,
    NgFor,
    MatTableModule,
    ReactiveFormsModule,
    AdminRoutingModule

  ],
  exports: [
    AdminComponent,
    DashboardComponent,
    RequestComponent
  ]
})
export class AdminModule { }