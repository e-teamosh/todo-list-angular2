import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {TodoComponent} from "./todo/todo.component";
import {NewItemComponent} from "./new-item/new-item.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";

const routes: Routes = [
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
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }