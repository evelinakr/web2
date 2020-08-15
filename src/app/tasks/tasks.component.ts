import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  sortedTasks: Task[];
  sorted = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
    this.sortedTasks = this.tasks.slice();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.addTask({ name } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  sortData(sort: Sort) {
    this.sorted = true;
    const data = this.tasks.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTasks = data;
      return;
    }

    this.sortedTasks = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'department': return compare(a.department_name, b.department_name, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

