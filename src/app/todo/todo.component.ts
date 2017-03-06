import {Component, OnInit} from '@angular/core';
import {Tasks} from "../tasks";
import {TodoService} from "../todo.service";

@Component({
  selector: 'todo-list',
  template: `
    <div class="todo-body">
      <ul class="todo-list">
        <li class="todo-item {{task.isDone ? 'done' : ''}}" *ngFor="let task of tasks">
          <span (click)="toggleStatus(task.id)" class="todo-item-span todo-item-status">{{task.isDone ? "&#10007;" : "&nbsp;"}}</span>
          <a [routerLink]="['/detail', task.id]" class="todo-item-span todo-item-title">{{task.title}}</a>
          <span class="todo-item-span todo-item-text">{{task.text}}</span>
        </li>
      </ul>
    </div>
  `
})

export class TodoComponent implements OnInit {
  name = 'TODO List';
  tasks: Tasks[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
     this.getTasks();
  }

  getTasks(): void {
     this.todoService.getTodoList().then(tasks => this.tasks = tasks);
  }
}
