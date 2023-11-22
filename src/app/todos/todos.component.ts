import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../types/todo';

@Component({
	selector: 'app-todos',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './todos.component.html',
	styleUrl: './todos.component.scss'
})
export class TodosComponent {

	todos: Todo[] = [
		{
			id: crypto.randomUUID(),
			title: "Test todo",
			completed: false
		},
		{
			id: crypto.randomUUID(),
			title: "Test todo two",
			completed: false
		},
		{
			id: crypto.randomUUID(),
			title: "Test todo three",
			completed: false
		}
	];

	edit(id: string) {
		console.log(id)
	}

	selectedId = "";
	openDeleteModal(id: string) {
		this.selectedId = id;
	}

}
