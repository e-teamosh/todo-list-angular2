import {Component, OnInit, OnDestroy} from "@angular/core";
import {TodoService} from "./todo.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'TODO List';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.init();
  }

  ngOnDestroy(): void {
    this.todoService.saveItems();
  }

}
