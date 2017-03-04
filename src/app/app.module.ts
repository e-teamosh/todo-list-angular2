import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent }  from './todo/todo.component';
import {TodoTitleComponent} from "./todo-title/todo-title.component";
import {TodoBodyComponent} from "./todo-body/todo-body.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoTitleComponent,
    TodoBodyComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
