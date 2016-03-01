import { h, render } from 'preact';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app';
import './style';

render((
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
), document.body);
