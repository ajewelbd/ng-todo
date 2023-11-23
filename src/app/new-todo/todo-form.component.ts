import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { uuid } from '../../helpers/helpers';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
	todoForm = new FormGroup({
		id: new FormControl<string>(uuid()),
		title: new FormControl("", [Validators.required, Validators.minLength(5)]),
		description: new FormControl("", Validators.minLength(1)),
		completed: new FormControl(false)
	})

	isNew = true;

	constructor(private todoSvc: TodoService, private router: Router, private activatedRoute: ActivatedRoute) {
		this.activatedRoute.queryParams.subscribe(param => {
			if(param["id"]) {
				const todo = this.todoSvc.todos.find(todo => todo.id === param["id"]);
				if(todo) {
					this.isNew = false;
					this.todoForm.setValue(todo)
				}
			}
		})
	}

	save() {
		console.log(this.todoForm.value)
		if(this.isNew) this.todoSvc.save(this.todoForm.value as Todo)
		else this.todoSvc.update(this.todoForm.value as Todo)
		
		this.router.navigate(["/"])
	}
}
