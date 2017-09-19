import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../util';
import store from '../reducers';
import * as actions from '../actions';
import TodoItem from './todo-item';

@connect(store, bindActions(actions))
export default class App extends Component {

	addTodo = () => this.props.text && this.props.addTodo();

	removeTodo = (todo) => this.props.removeTodo(todo);

	updateText = (e) => this.props.updateText(e);

	render({ todos, text }) {
		return (
			<div id="app">
				<form onSubmit={this.addTodo} action="javascript:">
					<input value={text} onInput={this.updateText} placeholder="New ToDo..." />
				</form>
				<ul>
					{ todos.map(todo => (
						<TodoItem key={todo.id} todo={todo} onRemove={this.removeTodo} />
					)) }
				</ul>
			</div>
		);
	}
}
