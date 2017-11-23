import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import './style';

export default () => (
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
);
