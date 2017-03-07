import {Component, OnInit, OnDestroy} from '@angular/core';
import {Tasks} from "../tasks";
import {TodoService} from "../todo.service";

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo.component.html'
})

export class TodoComponent implements OnInit, OnDestroy {
  name = 'TODO List';
  tasks: Tasks[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
     this.getTasks();
  }

  ngOnDestroy(): void {
    this.saveTasks();
  }

  getTasks(): void {
     this.tasks = this.todoService.getTodoList();
  }

  saveTasks(): void {
    this.todoService.saveItems(this.tasks);
  }
}
