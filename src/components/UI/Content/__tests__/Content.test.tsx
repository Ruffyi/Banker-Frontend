import { render, screen } from '@testing-library/react';
import Content from '../Content';

describe('Content component tests', () => {
	test('Correctly rendered', () => {
		render(<Content children={<h1>Hi!</h1>} />);

		const contentChildrenElements = screen.getByTestId('content').children;

		expect(contentChildrenElements).not.toHaveLength(0);
	});
});
