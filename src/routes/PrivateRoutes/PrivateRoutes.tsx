import { useContext } from 'react';
import { AuthContext } from '../../store/authContext/authContext';
import { Navigate, RouteProps } from 'react-router';

type TPrivateRoute = {
	children: JSX.Element;
};

const PrivateRoutes = ({ children }: TPrivateRoute & RouteProps) => {
	const { auth } = useContext(AuthContext);

	if (!auth) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

export default PrivateRoutes;
