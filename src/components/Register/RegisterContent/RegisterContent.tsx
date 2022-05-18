import { default as bemCssModules } from 'bem-css-modules';
import { default as RegisterContentStyles } from './RegisterContent.module.scss';

import RegisterHeading from '../RegisterHeading/RegisterHeading';
import RegisterForm from '../RegisterForm/RegisterForm';

const styled = bemCssModules(RegisterContentStyles);

const RegisterContent = () => {
	return (
		<div className={styled('')}>
			<RegisterHeading />
			<RegisterForm />
		</div>
	);
};

export default RegisterContent;
