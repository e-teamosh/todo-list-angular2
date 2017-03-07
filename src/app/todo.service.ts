import {Injectable, OnInit} from "@angular/core";
import {Tasks} from "./tasks";
import {Task} from "protractor/built/taskScheduler";

var TASKS: Tasks[] = [
  {id: 0, title: 'first', text: 'create todo list', isDone: false},
  {id: 1, title: 'second', text: 'add first task', isDone: true},
  {id: 2, title: 'third', text: 'make first task done', isDone: false}
];

const VARIABLE_NAME = 'todo-items';


@Injectable()
export class TodoService {
  tasks: Tasks[];

  init(): void {
    this.tasks = JSON.parse(localStorage.getItem(VARIABLE_NAME)) || [];
  }

  getTodoList(): Tasks[] {
    return this.tasks;
  }

  getTodoItem(taskId: number): Tasks {
    return this.tasks.find(task => task.id === taskId);
  }

  addItem(title: string, text: string): boolean {
    let itemsCount = this.tasks.length;

    try {
      this.tasks.push({
        id: itemsCount,
        title: title,
        text: text,
        isDone: false
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }

  saveItems(): void {
    localStorage.setItem(VARIABLE_NAME,JSON.stringify(this.tasks));
  }
}
