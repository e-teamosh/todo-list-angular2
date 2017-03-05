import {Component, OnInit} from "@angular/core";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Tasks} from "../tasks";

@Component({
  selector: 'todo-detail',
  template: `
    
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
        .subscribe((todoItem: Tasks) => {this.todoItem = todoItem});
    }
}
