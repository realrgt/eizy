import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

import { Employee } from './employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  panelOpenState = false;

  selected = 'todos';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(docs => this.employees = docs);
  }

  onAdd() {
    this.router.navigate(['form']);
  }

  update() {}

  delete() {}

  onSelect(event: any) {
    console.log(event);
    this.selected = event;
  }
}
