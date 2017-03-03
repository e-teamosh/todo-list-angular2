import {Component, Input} from '@angular/core';

@Component({
    selector: 'todo-title',
    template: `
        <div class="todo-title">
            <h1>{{name}}</h1>
        </div>
    `
})

export class TodoTitleComponent{
    @Input()
    name: string;
}