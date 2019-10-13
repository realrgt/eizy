import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeFormComponent } from './employee-form.component';
import { MatFormFieldModule, MatSelectModule, MatIconModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FilterModule } from '../filter/filter.module';



@NgModule({
  declarations: [
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FilterModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class EmployeeFormModule { }
