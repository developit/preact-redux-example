import { Provider } from 'preact-redux';
import store from './reducers/store';
import App from './components/app';
import './style';

export default () => (
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
);