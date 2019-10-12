import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  panelOpenState = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe(docs => (this.employees = docs));
  }

  update() {

  }

  delete() {

  }

}
