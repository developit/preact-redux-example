import { createStore } from 'redux';
import {ADD_TODO, REMOVE_TODO} from './todo'

const  ACTIONS = {
    ADD_TODO,
    REMOVE_TODO
}

const INITIAL = {
	todos: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);