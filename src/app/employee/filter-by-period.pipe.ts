import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'filterByTurno'
})
export class FilterByPeriodPipe implements PipeTransform {

  transform(employees: Employee[], periodQuery: string) {
    if (periodQuery === 'todos') {
      periodQuery = '';
    }
    periodQuery = periodQuery.trim().toLowerCase();

    if (periodQuery) {
      return employees.filter(employee =>
        employee.turno.toLowerCase().includes(periodQuery)
      );
    } else {
      return employees;
    }
  }

}
