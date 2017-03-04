import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/list">Watch List</a>
    <router-outlet></router-outlet>
  `
})

export class AppComponent{
  title = 'Todo List';
}
