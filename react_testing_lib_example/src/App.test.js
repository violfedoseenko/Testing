import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import App from './App';

describe("Test App", () => {
	test('1', () => {
		render(<App />);
		const helloElement = screen.getByText(/hello/i);
		const btn = screen.getByRole('button');
		const input = screen.getByPlaceholderText(/input value/i);
		expect(helloElement).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(input).toMatchSnapshot();
	});

	test('2', async () => {
		render(<App />);
		// const helloElement = screen.queryByText(/hello2/i);
		// expect(helloElement).toBeNull();

		//eslint-disable-next-line
		screen.debug();
		const dataElement = await screen.findByText('data');
		expect(dataElement).toBeInTheDocument();
		expect(dataElement).toHaveStyle({color: 'red'});
		//eslint-disable-next-line
		screen.debug();

	});

	test('click event', async () => {
		render(<App />);
		const btn = screen.getByTestId('toggle-btn')
		// тут лучше использовать query так как изначально этого элемента на странице нет
		// и надо проверить что он отстутствует

		expect(screen.queryByTestId('toggle-elem')).toBeNull()
		fireEvent.click(btn)
		//eslint-disable-next-line
		expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
		fireEvent.click(btn)
		expect(screen.queryByTestId('toggle-elem')).toBeNull()
	});

	test('input event via fireEvent', async () => {
		render(<App />);
		const input = screen.getByPlaceholderText(/input value/i);
		expect(screen.queryByTestId('value-elem')).toContainHTML('')

		// fireEvent - искуственное событие
		fireEvent.input(input, {
			target:{
				value: '123123'
			}
		})
		expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
	});

	test('input event via userEvent', async () => {
		render(<App />);
		const input = screen.getByPlaceholderText(/input value/i);
		expect(screen.queryByTestId('value-elem')).toContainHTML('')

		// userEvent не работает с конкретными событиями , а воспроизводит действия пользователя 
		// (движения мыши, нажатия кнопок, etc..)
		userEvent.type(input, '123123')

		expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
	});


})







