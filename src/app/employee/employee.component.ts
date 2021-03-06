import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';

import { Employee } from './employee';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import * as html2PDF from 'html2pdf.js';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  panelOpenState = false;
  selected = 'todos';

  form: FormGroup;

  // monk options data
  ops = ['matutino', 'diurno', 'noturno'];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(docs => this.employees = docs);

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      turno: [null, Validators.required]
    });
  }

  onAdd() {
    this.router.navigate(['form']);
  }

  update(employee: Employee) {

    console.log(employee);

    if (this.form.valid) {
      this.employeeService.updateEmployee(employee.id, this.form.value)
        .subscribe();
      window.location.reload();
    }


  }

  delete(id) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe();

    window.location.reload();

  }

  onSelect(event) {
    console.log(event);
    this.selected = event;
  }

  onClick(employee: Employee) {
    console.log(employee);
    this.form.get('nome').patchValue(employee.nome);
    this.form.get('turno').patchValue(employee.turno);
  }

  onPrint() {

    const name = prompt('Nome do relatorio:', 'relatorio') + '.pdf';
    const options = {
      margin: 1,
      filename: name,
      // filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const content = document.getElementById('table');

    html2PDF().from(content).set(options).save();
    // window.print(content);

  }

}
