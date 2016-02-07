import { h, Component } from 'preact';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActions } from './util';
import reduce from './reducers';
import * as actions from './actions';


@connect(reduce, bindActions(actions))
export default class App extends Component {
	shouldComponentUpdate(props, state) {
		console.log(state.text, this.state.text);
	}
	@bind
	addTodos() {
		let { text } = this.state;
		this.setState({ text:'' });
		this.props.addTodo(text);
		return false;
	}
	render({ todos }, { text={} }) {
		console.log(this.state);
		return (
			<div>
				<form onSubmit={this.addTodos} action="javascript:">
					<input value={text.two} onInput={this.linkState('text.two')} />
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
