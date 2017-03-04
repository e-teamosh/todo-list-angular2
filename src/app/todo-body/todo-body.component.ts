import {Component, Input} from '@angular/core';
import {TodoService} from "../todo.service";
import {Tasks} from "../tasks";

@Component({
    selector: 'todo-body',
    template: `
        <div class="todo-body">
          <ul class="todo-list">
              <li class="todo-item" *ngFor="let task of tasks" (click)="toggleStatus(task.id)">
                  <span class="todo-item-status">{{task.isDone ? "&#10003;" : "&#10007;"}}</span>
                  <span class="todo-item-title">{{task.title}}</span>
                  <span class="todo-item-text">{{task.text}}</span>
              </li>
          </ul>
        </div>
    `,
    providers: [TodoService]
})

export class TodoBodyComponent{
    @Input()
    tasks: Tasks[];

    constructor(private todoService: TodoService) {}

    toggleStatus(taskId: number) {
        this.todoService.toggleTaskStatus(taskId);
    }
}
