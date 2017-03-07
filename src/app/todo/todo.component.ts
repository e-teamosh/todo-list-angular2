import {Component, OnInit} from '@angular/core';
import {Tasks} from "../tasks";
import {TodoService} from "../todo.service";

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo.component.html'
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

  toggleStatus(taskId: number) {
      this.todoService.toggleTaskStatus(taskId);
  }
}
