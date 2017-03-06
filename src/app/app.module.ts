import { NgModule }      from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {TodoComponent}  from './todo/todo.component';
import {TodoBodyComponent} from "./todo-body/todo-body.component";
import {NewItemComponent} from "./new-item/new-item.component";
import {TodoService} from "./todo.service";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";

import {AppRoutingModule} from "./app-routing.module";
import {Location} from "@angular/common";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoBodyComponent,
    NewItemComponent,
    TodoDetailComponent
  ],
  bootstrap:    [
      AppComponent
  ],
  providers: [
      TodoService,
      Location
  ]
})
export class AppModule { }
