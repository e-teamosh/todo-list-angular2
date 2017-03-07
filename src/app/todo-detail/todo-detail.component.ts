import {Component, OnInit} from "@angular/core";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Tasks} from "../tasks";

@Component({
  moduleId: module.id,
  selector: 'todo-detail',
  templateUrl: 'todo-detail.component.html'
})

export class TodoDetailComponent implements OnInit {
    todoItem: Tasks;

    constructor(
      private todoService: TodoService,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.todoItem = this.todoService.getTodoItem(+this.route.snapshot.params['id']);
    }
}
