import {Injectable} from "@angular/core";
import {Tasks} from "./tasks";

var TASKS: Tasks[] = [
    {id: 0, title: 'first', text: 'create todo list', isDone: false},
    {id: 1, title: 'second', text: 'add first task', isDone: true},
    {id: 2, title: 'third', text: 'make first task done', isDone: false}
];


@Injectable()
export class TodoService{
    getTodoList(): Promise<Tasks[]> {
        return Promise.resolve(TASKS);
    }
    getTodoItem(taskId: number): Promise<Tasks> {
        return this.getTodoList()
          .then(tasks => tasks.find(task => task.id === taskId));
    }
    toggleTaskStatus(taskId: number): void {
        let task = TASKS.find((task) => {
            return task.id === taskId;
        });
        task.isDone = !task.isDone;
    }
}
