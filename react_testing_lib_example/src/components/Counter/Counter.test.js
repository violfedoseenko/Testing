import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import {createReduxStore} from '../../store/store'
import { renderWithRedux } from "../../tests/helpers/renderWithRedux"
import { renderTestApp } from "../../tests/helpers/renderTestApp"

describe('counter test', () => {
	test('router', async () => {

		//renderWithRedux(<Counter/>, {counter: {value: 10}})
		renderTestApp(null, {
			route: '/', 
			initialState: {counter: {value: 10}}
		})
		// render(
		// 	<Provider store={createReduxStore({counter: {value: 10}})}>
		// 		<Counter/>
		// 	</Provider>
		// 	)
		const incrementBtn = screen.getByTestId('increment-btn')
		expect(screen.getByTestId('value-title')).toHaveTextContent('10')
		userEvent.click(incrementBtn)
		expect(screen.getByTestId('value-title')).toHaveTextContent('11')
	})


})