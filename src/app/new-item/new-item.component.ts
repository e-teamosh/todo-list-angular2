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
  success: string = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.clearForm();
  }

  clearForm(): void {
    this.title = '';
    this.text = '';
  }

  clearMessages(): void {
    this.error = null;
    this.success = null;
  }

  onSubmit(): boolean {
    this.clearMessages();
    if (!this.title || !this.text) {
      this.error = 'fill all fields';
      return false;
    }
    if (this.todoService.addItem(this.title, this.text)) {
      this.success = 'item added';
    } else {
      this.error = 'some error occurred';
    }
    this.clearForm();
    return true;
  }
}
