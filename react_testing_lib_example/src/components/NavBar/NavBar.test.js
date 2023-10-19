import renderWithRouter  from '../../tests/helpers/renderWithRouter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';

describe("Test NavBar", () => {

	test('about link', async() => {
		renderWithRouter(<NavBar/>)
		const aboutLink = screen.getByTestId('about-link')
		userEvent.click(aboutLink)
		expect(screen.getAllByTestId('about-page')).toBeInTheDocument()
	});

	test('main link', async() => {
		renderWithRouter(<NavBar/>)
		const mainLink = screen.getByTestId('main-link')
		userEvent.click(mainLink)
		expect(screen.getAllByTestId('main-page')).toBeInTheDocument()
	});

	test('users link', async() => {
		renderWithRouter(<NavBar/>)
		const usersLink = screen.getByTestId('users-link')
		userEvent.click(usersLink)
		expect(screen.getAllByTestId('users-page')).toBeInTheDocument()
	});
})