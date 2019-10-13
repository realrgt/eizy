import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from './employee';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.API + '/empregados').pipe(
      take(1)
    );
  }

  addEmployee(employee) {
    return this.http.post(`${this.API}/empregados`, employee)
      .pipe(
        tap(console.log),
        take(1)
      );
  }

  updateEmployee(id: number, employee: Employee) {
    return this.http.put(`${this.API}/empregados/${id}`, employee).pipe(
      tap(console.log),
      take(1)
    );
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.API}/empregados/${id}`).pipe(
      take(1)
    );
  }

}
