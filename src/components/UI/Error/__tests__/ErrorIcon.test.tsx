import { render, screen } from '@testing-library/react';
import ErrorIcon from '../ErrorIcon/ErrorIcon';

describe('Error Icon component tests', () => {
	test('Correctly rendered', () => {
		render(<ErrorIcon icon={<h1>Hi!</h1>} />);

		const errorIconElement = screen.getByTestId('erroricon');

		expect(errorIconElement).toBeInTheDocument();
	});
});
