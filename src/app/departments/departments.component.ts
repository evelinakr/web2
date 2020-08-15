import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];
  sortedDepartments: Department[];
  sorted = false;


  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
    this.sortedDepartments = this.departments.slice();

  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.departmentService.addDepartment({ name } as Department)
      .subscribe(department => {
        this.departments.push(department);
      });
  }

  delete(department: Department): void {
    this.departments = this.departments.filter(h => h !== department);
    this.departmentService.deleteDepartment(department).subscribe();
  }

  sortData(sort: Sort) {
    this.sorted = true;
    const data = this.departments.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedDepartments = data;
      return;
    }

    this.sortedDepartments = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'building': return compare(a.building, b.building, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

