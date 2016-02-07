import { h, Component } from 'preact';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActions } from './util';
import reduce from './reducers';
import * as actions from './actions';


@connect(reduce, bindActions(actions))
export default class App extends Component {
	@bind
	addTodos() {
		let { text } = this.state;
		this.setState({ text:'' });
		this.props.addTodo(text);
		return false;
	}
	render({ todos }, { text }) {
		return (
			<div>
				<form onSubmit={this.addTodos} action="javascript:">
					<input value={text} onInput={this.linkState('text')} />
				</form>
				<ul>
					{ todos.map( item => (
						<li>{ item }</li>
					)) }
				</ul>
			</div>
		);
	}
}
