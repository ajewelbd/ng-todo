import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {
        path: "",
        component: TodosComponent
    },
    {
        path: "new-todo",
        component: NewTodoComponent
    },
    {
        path: "todo/:id",
        component: TodoComponent
    }
];
