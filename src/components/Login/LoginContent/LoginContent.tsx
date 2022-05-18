import { default as bemCssModules } from 'bem-css-modules';
import { default as LoginContentStyles } from './LoginContent.module.scss';

import LoginForm from '../LoginForm/LoginForm';
import LoginHeading from '../LoginHeading/LoginHeading';

const styled = bemCssModules(LoginContentStyles);

const LoginContent = () => {
	return (
		<div className={styled('')}>
			<LoginHeading />
			<LoginForm />
		</div>
	);
};

export default LoginContent;
