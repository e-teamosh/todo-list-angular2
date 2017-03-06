import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {TodoComponent}  from './todo/todo.component';
import {TodoTitleComponent} from "./todo-title/todo-title.component";
import {TodoBodyComponent} from "./todo-body/todo-body.component";
import {NewItemComponent} from "./new-item/new-item.component";
import {TodoService} from "./todo.service";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoTitleComponent,
    TodoBodyComponent,
    NewItemComponent,
    TodoDetailComponent
  ],
  bootstrap:    [
      AppComponent
  ],
  providers: [
      TodoService
  ]
})
export class AppModule { }
