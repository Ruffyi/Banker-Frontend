import { Route, Routes } from 'react-router';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<h1>Title!</h1>} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Routing;
