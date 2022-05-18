import { default as bemCssModules } from 'bem-css-modules';
import Button from '../../UI/Button/Button';
import { default as RegisterFormStyles } from './RegisterForm.module.scss';

const styled = bemCssModules(RegisterFormStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const RegisterForm = () => {
	return (
		<div className={styled('')}>
			<form className={styled('form')}>
				<div className={styled('item')}>
					<input
						type='text'
						className={styled('item', { input: true })}
						placeholder='Username'
						aria-label='Username'
						aria-required='true'
						title='Username'
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
					/>
				</div>
				<Button title='Register' modifier='sign' />
			</form>
		</div>
	);
};

export default RegisterForm;
