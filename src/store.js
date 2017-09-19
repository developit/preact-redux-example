import { createStore } from 'redux';

let ACTIONS = {
	ADD_TODO: ({ todos, text, ...state }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		text: '',
		...state
	}),

	REMOVE_TODO: ({ todos, ...state }, { todo }) => ({
		todos: todos.filter( i => i!==todo ),
		...state
	}),

	UPDATE_TEXT: ({ text, ...state }, { event }) => ({
		text: event.target.value,
		...state
	})
};

const INITIAL = {
	todos: [],
	text: ''
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());
