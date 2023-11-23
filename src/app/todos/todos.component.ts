import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../types/todo';
import { RouterModule } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
	selector: 'app-todos',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './todos.component.html',
	styleUrl: './todos.component.scss'
})
export class TodosComponent {
	@ViewChild("deleteModal")
	deleteModal!: ElementRef<HTMLDialogElement>;

	todos: Todo[] = [];

	constructor(private todoSvc: TodoService) {
		this.todos = this.todoSvc.todos;
	}

	selectedId = "";
	openDeleteModal(id: string) {
		this.selectedId = id;
		this.deleteModal.nativeElement.showModal()
	}

	delete() {
		this.todos = this.todoSvc.delete(this.selectedId);
		this.deleteModal.nativeElement.close();
	}

	toggleCompleted(todo: Todo) {
		this.todos = this.todoSvc.update({...todo, completed: !todo.completed})
	}

}
