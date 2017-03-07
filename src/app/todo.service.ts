import {Injectable, OnInit} from "@angular/core";
import {Tasks} from "./tasks";

var TASKS: Tasks[] = [
  {id: 0, title: 'first', text: 'create todo list', isDone: false},
  {id: 1, title: 'second', text: 'add first task', isDone: true},
  {id: 2, title: 'third', text: 'make first task done', isDone: false}
];


@Injectable()
export class TodoService {
  tasks: Tasks[] = JSON.parse(localStorage.getItem('todo-item')) || [];

  getTodoList(): Tasks[] {
    return this.tasks;
  }

  getTodoItem(taskId: number): Tasks {
    return this.getTodoList().find(task => task.id === taskId);
  }

  toggleTaskStatus(taskId: number): void {
    let task = this.tasks.find(task => task.id === taskId);
    task.isDone = !task.isDone;
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
}
