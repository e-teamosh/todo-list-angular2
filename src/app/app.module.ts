import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TodoTitleComponent} from "./todo-title/todo-title.component";
import {TodoBodyComponent} from "./todo-body/todo-body.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    TodoTitleComponent,
    TodoBodyComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
