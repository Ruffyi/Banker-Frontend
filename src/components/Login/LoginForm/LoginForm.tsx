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
		username: '',
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
			username: '',
			password: '',
		});
	};

	return (
		<div className={styled('')}>
			<form className={styled('form')} onSubmit={handleFormSubmit}>
				<div className={styled('item')}>
					<input
						type='text'
						className={styled('item', { input: true })}
						placeholder='Username'
						aria-label='Username'
						aria-required='true'
						title='Username'
						name='username'
						value={loginFormData.username}
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
