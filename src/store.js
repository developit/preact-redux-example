import { createStore } from 'redux';

let ACTIONS = {
	ADD_TODO: ({ todos }, { text }) => ({ todos: (todos || []).concat(text) })
};

const INITIAL = {
	todos: []
};

export default createStore( (state, action) => {
	return action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state || INITIAL;
});
