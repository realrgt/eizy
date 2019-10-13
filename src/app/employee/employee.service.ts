import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from './employee';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.API + '/empregados').pipe(
      // tap(console.log)
    );
  }

  addEmployee(employee: Employee) {
    return this.http.post(`${this.API}/empregados`, employee);
  }

}
