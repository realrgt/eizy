import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EmployeeModule,
    HomeModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
