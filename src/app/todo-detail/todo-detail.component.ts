import {Component, OnInit} from "@angular/core";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';
import {Tasks} from "../tasks";

@Component({
  selector: 'todo-detail',
  template: `
    <div class="todo-detail" *ngIf="todoItem">
        <h1>title: {{todoItem.title | uppercase}}</h1>
        <h4>text: {{todoItem.text}}</h4>
        <h4>status: {{todoItem.isDone ? 'Done' : 'Working on it'}}</h4>
    </div>
  `
})

export class TodoDetailComponent implements OnInit {
    todoItem: Tasks;

    constructor(
      private todoService: TodoService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.todoService.getTodoItem(+params['id']))
        .subscribe((todoItem: Tasks) => {this.todoItem = todoItem;});
    }
}
