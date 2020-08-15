import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  @Input() employee: Employee;

  female: boolean = true;
  departments: Department[];
  selectedDepartment: Department;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.getEmployee();
    this.getDepartments();

    if (this.employee.gender == 'test') {
      this.female = true;
    } else {
      this.female = false;
    }

  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
  }
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
  }

  onChange(newValue) {
    this.employee.department_id = newValue.id;
    this.employee.department_name = newValue.name;
  }

}
