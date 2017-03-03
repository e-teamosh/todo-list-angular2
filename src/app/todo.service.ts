import {Injectable} from "@angular/core";
import {Tasks} from "./tasks";

var TASKS: Tasks[] = [
    {id: 0, title: 'first', text: 'create todo list', isDone: false},
    {id: 1, title: 'second', text: 'add first task', isDone: true}
];


@Injectable()
export class TodoService{
    getTodoList(): Tasks[] {
        return TASKS;
    }
    toggleTaskStatus(taskId: number): void {
        let task = TASKS.find((task) => {
            return task.id === taskId;
        });
        task.isDone = !task.isDone;
    }
}