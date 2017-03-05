import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {TodoComponent}  from './todo/todo.component';
import {TodoTitleComponent} from "./todo-title/todo-title.component";
import {TodoBodyComponent} from "./todo-body/todo-body.component";
import {RouterModule} from "@angular/router";
import {NewItemComponent} from "./new-item/new-item.component";
import {TodoService} from "./todo.service";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: TodoComponent
      },
      {
        path: 'new',
        component: NewItemComponent
      },
      {
        path: 'detail/:id',
        component: TodoDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoTitleComponent,
    TodoBodyComponent,
    NewItemComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [TodoService]
})
export class AppModule { }
