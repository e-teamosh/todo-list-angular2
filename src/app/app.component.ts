import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="/list">Watch List</a>
      <a routerLink="/new">Add Item</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent{
  title = 'Todo List';
}
