import { bindActionCreators } from 'redux';

export function bindActions(actions) {
	return dispatch => ({
		...bindActionCreators(actions, dispatch)
	});
}
