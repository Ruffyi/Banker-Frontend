import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from './store/authContext/authContext';

ReactDOM.render(
	<Router>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</Router>,
	document.getElementById('root')
);
