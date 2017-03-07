import {Injectable, OnInit} from "@angular/core";
import {Tasks} from "./tasks";

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
    return this.getTodoList().find(task => task.id === taskId);
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
