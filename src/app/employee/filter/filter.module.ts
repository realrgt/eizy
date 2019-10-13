import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [FilterComponent],
  exports: [FilterComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class FilterModule {  }
