import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component tests', () => {
	test('Correctly rendered', () => {
		render(<Button modifier='' title='Hello' />);

		const buttonElement = screen.getByRole('button', { name: 'Hello' });

		expect(buttonElement).toBeInTheDocument();
	});
});
