import { Route, Routes } from 'react-router';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<h1>Title!</h1>} />

			<Route
				path='/dashboard'
				element={
					<PrivateRoutes>
						<h1>Dashboard</h1>
					</PrivateRoutes>
				}
			/>

			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Routing;
