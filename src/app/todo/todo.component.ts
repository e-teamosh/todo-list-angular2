import {Component, OnInit} from '@angular/core';
import {Tasks} from "../tasks";
import {TodoService} from "../todo.service";

@Component({
  selector: 'todo',
  template: `
    <div class="todo-container">
        <todo-title [name]="name"></todo-title>
        <todo-body [tasks]="tasks"></todo-body>
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
    this.tasks = this.todoService.getTodoList();
  }
}
