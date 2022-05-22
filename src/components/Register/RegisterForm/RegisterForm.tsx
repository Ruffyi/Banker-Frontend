import { default as bemCssModules } from 'bem-css-modules';
import { default as RegisterFormStyles } from './RegisterForm.module.scss';

import ErrorIconImage from './../../../assets/svg/icon-error.svg';
import Button from '../../UI/Button/Button';
import ErrorIcon from '../../UI/Error/ErrorIcon/ErrorIcon';
import Error from '../../UI/Error/Error';

import { validationFormData } from '../../../utils/validation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { postAxios } from '../../../services/helpers/apiHelpers';
import Cookies from 'universal-cookie';
import { API_ENDPOINT, BASE_API } from '../../../services/api';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const styled = bemCssModules(RegisterFormStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const RegisterForm = () => {
	const navigate = useNavigate();

	const [registerFormData, setRegisterFormData] = useState({
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
		setRegisterFormData(prevRegisterFormDataState => ({
			...prevRegisterFormDataState,
			[name]: value,
		}));
	};

	const returnInitialStates = () => {
		setErrors({
			email: { status: false, message: '' },
			password: { status: false, message: '' },
			passwordConfirm: { status: false, message: '' },
		});

		setRegisterFormData({
			email: '',
			password: '',
			passwordConfirm: '',
		});
	};

	const setJWTCookies = (token: string) => {
		const cookies = new Cookies();
		cookies.set('jwt', token);
	};

	const createNewUser = async () => {
		const data = await postAxios(
			`${BASE_API}${API_ENDPOINT.signup}`,
			registerFormData
		);
		const { token } = data;
		setJWTCookies(token);
	};

	const redirectToLoginPage = () => {
		navigate('../login', { replace: true });
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();

		const errors = Object.values(validationFormData(registerFormData)).map(
			error => error.status
		);

		if (errors.includes(true)) {
			return setErrors(validationFormData(registerFormData));
		}

		createNewUser();

		returnInitialStates();

		redirectToLoginPage();
	};

	return (
		<div className={styled('')} data-testid='register'>
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
						value={registerFormData.email}
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
						value={registerFormData.password}
						onChange={handleChangeInput}
					/>
					{errors.password.status && (
						<Error message={errors.password.message} />
					)}
					{errors.password.status && (
						<ErrorIcon icon={<img src={ErrorIconImage} alt='Error' />} />
					)}
				</div>
				<div className={styled('item')}>
					<input
						type='password'
						className={styled('item--input')}
						placeholder='Password Confirm'
						aria-label='PasswordConfirm'
						aria-required='true'
						title='Password Confirm'
						name='passwordConfirm'
						value={registerFormData.passwordConfirm}
						onChange={handleChangeInput}
					/>
					{errors.passwordConfirm.status && (
						<Error message={errors.passwordConfirm.message} />
					)}
					{errors.passwordConfirm.status && (
						<ErrorIcon icon={<img src={ErrorIconImage} alt='Error' />} />
					)}
				</div>
				<Button title='Register' modifier='sign' />
				<Link to='../login' className={styled('route')}>
					If you have account click here!
				</Link>
			</form>
		</div>
	);
};

export default RegisterForm;
