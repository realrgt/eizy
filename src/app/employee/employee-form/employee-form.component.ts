import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  templateUrl: 'employee-form.component.html',
  styleUrls: ['employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [null],
      period: [null]
    });

  }

  onSubmit(employee: Employee) {
    this.employeeService.addEmployee(employee)
    .subscribe(doc => console.log(doc));
  }

  onSelect(event) {
    console.log(event);
  }

}
