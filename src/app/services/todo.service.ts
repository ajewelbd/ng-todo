import { Injectable } from '@angular/core';
import { Todo } from '../types/todo';
import { getFromStorage, setToStorage, toJson, toString } from '../../helpers/helpers';

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	todos: Todo[] = [];

	constructor() {
		const todos = toJson(getFromStorage("todos") as string);
		this.todos = todos || [];
	}

	save(todo: Todo) {
		this.todos.push(todo);
		setToStorage("todos", toString(this.todos));
	}

	update(todo: Todo) {
		this.todos = this.todos.map(_todo => {
			if(_todo.id === todo.id) _todo = todo;
			return _todo;
		})
		
		setToStorage("todos", toString(this.todos));
		return this.todos;
	}

	delete(id: string) {
		this.todos = this.todos.filter(todo => todo.id !== id);
		setToStorage("todos", toString(this.todos));
		return this.todos;
	}
}
