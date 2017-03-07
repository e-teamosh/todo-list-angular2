import {Injectable} from "@angular/core";
import {Tasks} from "./tasks";

var TASKS: Tasks[] = [
  {id: 0, title: 'first', text: 'create todo list', isDone: false},
  {id: 1, title: 'second', text: 'add first task', isDone: true},
  {id: 2, title: 'third', text: 'make first task done', isDone: false}
];


@Injectable()
export class TodoService {

  getTodoList(): Promise<Tasks[]> {
    return Promise.resolve(TASKS);
  }
  getTodoItem(taskId: number): Promise<Tasks> {
    return this.getTodoList()
      .then(tasks => tasks.find(task => task.id === taskId));
  }

  toggleTaskStatus(taskId: number): void {
    let task = TASKS.find(task => task.id === taskId);
    task.isDone = !task.isDone;
  }

  addItem(title: string, text: string): boolean {
    let itemsCount: number = 0;
    this.getTodoList()
      .then(tasks => {
        itemsCount = tasks.length;
        try {
          TASKS.push({
            id: itemsCount,
            title: title,
            text: text,
            isDone: false
          });
        } catch (err) {
          console.log(err);
          return false;
        }
      })
      .catch(error => console.log(error));

    return true;
  }
}
