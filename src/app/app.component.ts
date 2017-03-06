import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <nav class="todo-nav">
      <a class="todo-nav-item" routerLink="/list" routerLinkActive="active">Watch List</a>
      <a class="todo-nav-item" routerLink="/new" routerLinkActive="active">Add Item</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent{
  title = 'Todo List';
}
