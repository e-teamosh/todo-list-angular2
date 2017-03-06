import {Component, OnInit} from "@angular/core";
import {TodoService} from "../todo.service";

@Component({
  moduleId: module.id,
  selector: 'todo-new',
  templateUrl: 'new-item.component.html'
})

export class NewItemComponent implements OnInit{
  title: string = '';
  text: string = '';
  error: string = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm(): void {
    this.title = '';
    this.text = '';
    this.error = null;
  }

  onSubmit(): void {
    if (!this.todoService.addItem(this.title, this.text)) {
      this.error = 'some error occurred';
    }
    this.clearForm();
  }
}
