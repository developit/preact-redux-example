import { h, Component } from 'preact';

export default class TodoItem extends Component {
	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	shouldComponentUpdate({ todo, onRemove }) {
		return todo !== this.props.todo || onRemove !== this.props.onRemove;
	}

	render({ todo }) {
		return (
			<li>
				<button onClick={this.remove}>×</button>
				{ ' ' + todo.text }
			</li>
		);
	}
}
