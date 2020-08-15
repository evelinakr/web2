import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SearchComponent } from './search/search.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'taskDetail/:id', component: TaskDetailComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'departmentDetail/:id', component: DepartmentDetailComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employeeDetail/:id', component: EmployeeDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'taskEdit/:id', component: TaskEditComponent },
  { path: 'departmentEdit/:id', component: DepartmentEditComponent },
  { path: 'employeeEdit/:id', component: EmployeeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }