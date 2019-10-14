import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './home/login/login.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  { path: 'login', component: LoginComponent },
  // { path: 'employees', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employees', component: EmployeeComponent },
  { path: 'form', component: EmployeeFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
