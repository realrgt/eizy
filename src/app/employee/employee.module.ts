import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeComponent } from './employee.component';
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
} from '@angular/material';
import { FilterByPeriodPipe } from './filter-by-period.pipe';
import { EmployeeFormModule } from './employee-form/employee-form.module';
import { FilterModule } from './filter/filter.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    FilterByPeriodPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeeFormModule,
    FilterModule,
    ReactiveFormsModule,
    FormsModule,

    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class EmployeeModule {}
