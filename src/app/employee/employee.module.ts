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
  MatSelectModule
} from '@angular/material';
import { FilterComponent } from './filter/filter.component';
import { FilterByPeriodPipe } from './filter-by-period.pipe';


@NgModule({
  declarations: [
    EmployeeComponent,
    FilterComponent,
    FilterByPeriodPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class EmployeeModule {}
