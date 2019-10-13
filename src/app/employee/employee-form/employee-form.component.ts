import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'employee-form.component.html',
  styleUrls: ['employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      turno: [null, [Validators.required]]
    });

  }

  onSubmit() {
    if (this.form.valid) {
      this.employeeService.addEmployee(this.form.value)
      .subscribe(success => {
        this.location.back();
        alert('Adiconado com sucesso!');
      });
    }
  }

  onSelect(event) {
    console.log(event); // Period selected in the select component

    if (event === 'todos') {
      this.form.get('turno').patchValue(null);
    } else {
      this.form.get('turno').patchValue(event);
    }
  }

}
