import { Navigate, Route, Routes } from 'react-router';
import Login from './../../pages/Login/Login';
import Register from './../../pages/Register/Register';
import Dashboard from '../../pages/Dashboard/Dashboard';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/login' replace />} />

			<Route
				path='/dashboard'
				element={
					<PrivateRoutes>
						<Dashboard />
					</PrivateRoutes>
				}
			/>

			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Routing;
