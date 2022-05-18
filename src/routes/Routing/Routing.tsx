import { Route, Routes } from 'react-router';
import RegisterForm from '../../components/Register/Register';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<h1>Title!</h1>} />
			<Route path='/register' element={<RegisterForm />} />
		</Routes>
	);
};

export default Routing;
