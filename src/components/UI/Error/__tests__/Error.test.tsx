import { render, screen } from '@testing-library/react';
import Error from '../Error';

describe('Error component tests', () => {
	test('Correctly rendered', () => {
		render(<Error message='Error' />);

		const errorElement = screen.getByText(/Error/i);
		expect(errorElement).toHaveTextContent(/Error/i);
	});
});
