import { default as bemCssModules } from 'bem-css-modules';
import { default as RegisterHeadingStyles } from './RegisterHeading.module.scss';

const styled = bemCssModules(RegisterHeadingStyles);

const RegisterHeading = () => {
	return (
		<div className={styled('')}>
			<h1 className={styled('title')}>Register to our bank application</h1>
			<p className={styled('description')}>
				Our bank application is free for all users. You can do what you want
				with your bank account. We hope you will be happy.
			</p>
		</div>
	);
};

export default RegisterHeading;
