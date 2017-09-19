
export function addTodo() {
	return {
		type: 'ADD_TODO'
	};
}

export function removeTodo(todo) {
	return {
		type: 'REMOVE_TODO',
		todo
	};
}

export function updateText(event) {
	return {
		type: 'UPDATE_TEXT',
		event
	};
}
