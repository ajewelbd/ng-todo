import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './new-todo/todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: TodosComponent
    },
    {
        path: "new-todo",
        component: TodoFormComponent
    },
    {
        path: "todo",
        component: TodoFormComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
