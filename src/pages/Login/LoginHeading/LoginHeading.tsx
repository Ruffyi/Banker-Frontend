import { default as bemCssModules } from 'bem-css-modules';
import { default as LoginHeadingStyles } from './LoginHeading.module.scss';

const styled = bemCssModules(LoginHeadingStyles);

const LoginHeading = () => {
	return (
		<div className={styled('')}>
			<h1 className={styled('title')}>Login to our bank application</h1>
			<p className={styled('description')}>
				Our bank application is free for all users. You can do what you want
				with your bank account. We hope you will be happy.
			</p>
		</div>
	);
};

export default LoginHeading;
