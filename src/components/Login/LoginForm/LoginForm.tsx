import { default as bemCssModules } from 'bem-css-modules';
import { default as LoginFormStyles } from './LoginForm.module.scss';

import Button from '../../UI/Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';

const styled = bemCssModules(LoginFormStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const LoginForm = () => {
	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
	});

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputTarget = e.target as HTMLInputElement;
		setLoginFormData({
			...loginFormData,
			[inputTarget.name]: inputTarget.value,
		});
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();

		setLoginFormData({
			email: '',
			password: '',
		});
	};

	return (
		<div className={styled('')}>
			<form className={styled('form')} onSubmit={handleFormSubmit}>
				<div className={styled('item')}>
					<input
						type='email'
						className={styled('item', { input: true })}
						placeholder='Email'
						aria-label='Email'
						aria-required='true'
						title='Email'
						name='email'
						value={loginFormData.email}
						onChange={handleChangeInput}
					/>
				</div>
				<div className={styled('item')}>
					<input
						type='password'
						className={styled('item', { input: true })}
						placeholder='Password'
						aria-label='Password'
						aria-required='true'
						title='Password'
						name='password'
						value={loginFormData.password}
						onChange={handleChangeInput}
					/>
				</div>
				<Button title='Login' modifier='sign' />
			</form>
		</div>
	);
};

export default LoginForm;
