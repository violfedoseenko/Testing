import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App'
import { MemoryRouter } from 'react-router-dom';

describe('Router test', () => {

	test('router test 1', () => {
		render(
			// MemoryRouter предназначен специально для тестирования
			<MemoryRouter>
				<App />
			</MemoryRouter>
		)
		const mainLink = screen.getByTestId('main-link')
		const aboutLink = screen.getByTestId('about-link')
		console.log('aboutLink!!!', aboutLink)
		// userEvent.click(aboutLink)
		// expect(screen.getByTestId('about-page')).toBeInTheDocument()
		// userEvent.click(mainLink)
		// expect(screen.getByTestId('main-page')).toBeInTheDocument()
	});

	test('non-existing routes', () => {
		render(
			<MemoryRouter initialEntries={['/dfghjh']}>
				<App />
			</MemoryRouter>
		)
		expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
	});
})