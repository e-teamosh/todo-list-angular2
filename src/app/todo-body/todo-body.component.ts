import {Component, Input} from '@angular/core';
import {TodoService} from "../todo.service";
import {Tasks} from "../tasks";

@Component({
    selector: 'todo-body',
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
