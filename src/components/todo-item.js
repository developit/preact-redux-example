import { h, Component } from 'preact';

export default class TodoItem extends Component {
	shouldComponentUpdate({ todo, onRemove }) {
		return todo !== this.props.todo || onRemove !== this.props.onRemove;
	}

	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	render({ todo }) {
		return (
			<li>
				<button onClick={this.remove}>&times;</button>
				{ ' ' + todo.text }
			</li>
		);
	}
}
