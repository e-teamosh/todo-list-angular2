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

  getTodoList(): Tasks[] {
    return JSON.parse(localStorage.getItem(VARIABLE_NAME)) || [];
  }

  getTodoItem(taskId: number, tasks: Tasks[]): Tasks {
    return tasks.find(task => task.id === taskId);
  }

  addItem(title: string, text: string, tasks: Tasks[]): Tasks[] {
    let itemsCount = tasks.length;

    try {
      tasks.push({
        id: itemsCount,
        title: title,
        text: text,
        isDone: false
      });
    } catch (err) {
      console.log(err);
    }

    return tasks;
  }

  saveItems(tasks: Tasks[]): void {
    localStorage.setItem(VARIABLE_NAME,JSON.stringify(tasks));
  }
}
