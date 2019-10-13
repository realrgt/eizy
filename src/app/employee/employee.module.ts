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
} from '@angular/material';
import { FilterByPeriodPipe } from './filter-by-period.pipe';
import { EmployeeFormModule } from './employee-form/employee-form.module';
import { FilterModule } from './filter/filter.module';


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

    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class EmployeeModule {}
