import { screen } from '@testing-library/react';
import Users from './users';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';

jest.mock('axios')

describe('Users test', () => {
	let response
	beforeEach(() => {
		response = {
			data: [
				{
					"id": 1,
					"name": "Leanne Graham",
				},
				{
					"id": 2,
					"name": "Ervin Howell",
				},
			]
		}
	})

	

	test('user test', async () => {
		axios.get.mockReturnValue(response)
		renderWithRouter(<Users/>)
		const users = await screen.findAllByTestId('user-item')
		expect(users.length).toBe(2)
		expect(axios.get).toBeCalledTimes(1)
		//eslint-disable-next-line
		screen.debug()
	});

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('redirect to details page', async () => {
		axios.get.mockReturnValue(response)
		renderWithRouter(<Users/>)
		const users = await screen.findAllByTestId('user-item')
		expect(users.length).toBe(2);
		userEvent.click(users[1])
		expect(screen.getByTestId('user-page')).toBeInTheDocument()
	});


})