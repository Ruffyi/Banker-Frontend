import { default as bemCssModules } from 'bem-css-modules';
import { default as RegisterFormStyles } from './RegisterForm.module.scss';

import Button from '../../UI/Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';

const styled = bemCssModules(RegisterFormStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const RegisterForm = () => {
	const [registerFormData, setRegisterFormData] = useState({
		username: '',
		password: '',
		passwordConfirm: '',
	});

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const inputTarget = e.target as HTMLInputElement;
		setRegisterFormData({
			...registerFormData,
			[inputTarget.name]: inputTarget.value,
		});
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();

		setRegisterFormData({
			username: '',
			password: '',
			passwordConfirm: '',
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
						value={registerFormData.username}
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
						value={registerFormData.password}
						onChange={handleChangeInput}
					/>
				</div>
				<div className={styled('item')}>
					<input
						type='password'
						className={styled('item', { input: true })}
						placeholder='Password Confirm'
						aria-label='Password Confirm'
						aria-required='true'
						title='Password Confirm'
						name='passwordConfirm'
						value={registerFormData.passwordConfirm}
						onChange={handleChangeInput}
					/>
				</div>
				<Button title='Register' modifier='sign' />
			</form>
		</div>
	);
};

export default RegisterForm;
