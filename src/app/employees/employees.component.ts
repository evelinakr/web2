import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  departments: Department[];
  sortedEmployees: Employee[];
  sorted = false;

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getEmployees();
    this.sortedEmployees = this.employees.slice();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  add(last_name: string): void {
    last_name = last_name.trim();
    if (!last_name) { return; }
    this.employeeService.addEmployee({ last_name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }
  sortData(sort: Sort) {
    this.sorted = true;
    const data = this.employees.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedEmployees = data;
      return;
    }

    this.sortedEmployees = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.last_name, b.last_name, isAsc);
        case 'department': return compare(a.department_name, b.department_name, isAsc);
        case 'position': return compare(a.position, b.position, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}