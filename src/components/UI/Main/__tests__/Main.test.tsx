import { render, screen } from '@testing-library/react';
import Main from '../Main';

describe('Main component tests', () => {
	test('Correctly rendered', () => {
		render(<Main children={<h1>Hi!</h1>} />);

		const mainChildrenElements = screen.getByTestId('main').children;
		
		expect(mainChildrenElements).not.toHaveLength(0);
	});
});
