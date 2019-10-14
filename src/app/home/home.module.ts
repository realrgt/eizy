import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule,  MatIconModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class HomeModule { }
