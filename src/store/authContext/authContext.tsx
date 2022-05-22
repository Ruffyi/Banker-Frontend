import { createContext, useState } from 'react';
import { TChildrenRoot } from '../../@types/shared/shared.types';

type TAuthContext = {
	auth: boolean;
	setAuth: (auth: boolean) => void;
	token: string;
	setToken: (token: string) => void;
};

const defaultAuthState = {
	auth: false,
	token: '',
	setToken: () => {},
	setAuth: () => {},
};
const AuthContext = createContext<TAuthContext>(defaultAuthState);

const AuthContextProvider = ({ children }: TChildrenRoot) => {
	const [token, setToken] = useState('');
	const [auth, setAuth] = useState(false);
	return (
		<AuthContext.Provider value={{ token, setToken, auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext };

export default AuthContextProvider;
