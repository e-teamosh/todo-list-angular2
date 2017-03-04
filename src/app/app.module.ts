import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {TodoComponent}  from './todo/todo.component';
import {TodoTitleComponent} from "./todo-title/todo-title.component";
import {TodoBodyComponent} from "./todo-body/todo-body.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: TodoComponent
      },
      {
        path: 'new'
      }
    ])
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoTitleComponent,
    TodoBodyComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
