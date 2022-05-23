import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from '../RegisterForm';
import { BrowserRouter } from 'react-router-dom';

describe('RegisterForm component tests', () => {
	test('Correctly rendered', () => {
		render(
			<BrowserRouter>
				<RegisterForm />
			</BrowserRouter>
		);

		const registerFormChildrenElements =
			screen.getByTestId('register').children;

		expect(registerFormChildrenElements).not.toHaveLength(0);
	});

	test('Correctly Inputs handling', () => {
		render(
			<BrowserRouter>
				<RegisterForm />
			</BrowserRouter>
		);

		const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
		const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
		const passwordConfirmInput = screen.getByLabelText(
			'PasswordConfirm'
		) as HTMLInputElement;

		fireEvent.change(emailInput, { target: { value: 'kam.nas21@wp.pl' } });
		fireEvent.change(passwordInput, { target: { value: 'Halo1234' } });
		fireEvent.change(passwordConfirmInput, { target: { value: 'Halo1234' } });

		expect(emailInput.value).toBe('kam.nas21@wp.pl');
		expect(passwordInput.value).toBe('Halo1234');
		expect(passwordConfirmInput.value).toBe('Halo1234');
	});
});
