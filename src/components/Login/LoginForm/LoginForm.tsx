import { default as bemCssModules } from 'bem-css-modules';
import { default as LoginFormStyles } from './LoginForm.module.scss';

import Button from '../../UI/Button/Button';
import Error from '../../UI/Error/Error';
import ErrorIcon from '../../UI/Error/ErrorIcon/ErrorIcon';
import ErrorIconImage from './../../../assets/svg/icon-error.svg';

import { validationFormData } from '../../../utils/validation';
import { ChangeEvent, FormEvent, useState } from 'react';

const styled = bemCssModules(LoginFormStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const LoginForm = () => {
	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const [errors, setErrors] = useState({
		email: { status: false, message: '' },
		password: { status: false, message: '' },
		passwordConfirm: { status: false, message: '' },
	});

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target as HTMLInputElement;
		setLoginFormData(prevLoginFormDataState => ({
			...prevLoginFormDataState,
			[name]: value,
		}));
	};

	const returnInitialStates = () => {
		setErrors({
			email: { status: false, message: '' },
			password: { status: false, message: '' },
			passwordConfirm: { status: false, message: '' },
		});

		setLoginFormData({
			email: '',
			password: '',
			passwordConfirm: '',
		});
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();

		const errors = Object.values(validationFormData(loginFormData)).map(
			error => error.status
		);

		if (errors.includes(true)) {
			return setErrors(validationFormData(loginFormData));
		}

		returnInitialStates();
	};

	return (
		<div className={styled('')}>
			<form className={styled('form')} onSubmit={handleFormSubmit}>
				<div className={styled('item')}>
					<input
						type='text'
						className={styled('item--input')}
						placeholder='Email'
						aria-label='Email'
						aria-required='true'
						title='Email'
						name='email'
						value={loginFormData.email}
						onChange={handleChangeInput}
					/>
					{errors.email.status && <Error message={errors.email.message} />}
					{errors.email.status && (
						<ErrorIcon icon={<img src={ErrorIconImage} alt='Error' />} />
					)}
				</div>
				<div className={styled('item')}>
					<input
						type='password'
						className={styled('item--input')}
						placeholder='Password'
						aria-label='Password'
						aria-required='true'
						title='Password'
						name='password'
						value={loginFormData.password}
						onChange={handleChangeInput}
					/>
					{errors.password.status && (
						<Error message={errors.password.message} />
					)}
					{errors.password.status && (
						<ErrorIcon icon={<img src={ErrorIconImage} alt='Error' />} />
					)}
				</div>
				<Button title='Login' modifier='sign' />
			</form>
		</div>
	);
};

export default LoginForm;
