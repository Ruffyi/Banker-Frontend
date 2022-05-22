import { render, screen } from '@testing-library/react';
import Wrapper from '../Wrapper';

describe('Wrapper component tests', () => {
	test('Correctly rendered', () => {
		render(<Wrapper children={<h1>Hi!</h1>} />);

		const wrapperChildrenElements = screen.getByTestId('wrapper').children;
		
		expect(wrapperChildrenElements).not.toHaveLength(0);
	});
});
