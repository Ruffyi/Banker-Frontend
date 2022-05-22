import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';
import { BrowserRouter } from 'react-router-dom';

describe('LoginForm component tests', () => {
	test('Correctly rendered', () => {
		render(
			<BrowserRouter>
				<LoginForm />
			</BrowserRouter>
		);

		const loginFormChildrenElements =
			screen.getByTestId('login').children;

		expect(loginFormChildrenElements).not.toHaveLength(0);
	});

	test('Correctly Inputs handling', () => {
		render(
			<BrowserRouter>
				<LoginForm />
			</BrowserRouter>
		);

		const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
		const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;

		fireEvent.change(emailInput, { target: { value: 'kam.nas21@wp.pl' } });
		fireEvent.change(passwordInput, { target: { value: 'Halo1234' } });

		expect(emailInput.value).toBe('kam.nas21@wp.pl');
		expect(passwordInput.value).toBe('Halo1234');
	});
});
