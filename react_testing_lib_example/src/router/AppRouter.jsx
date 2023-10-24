import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import Users from '../components/users/users';
import UserDetailsPage from '../pages/UserDetailsPage';
import HelloWorld from '../pages/HelloWorld';
import UsersForTest from '../components/usersForTest/usersForTest';

const AppRouter = () => {
	return ( 
		<Routes>
			<Route path='/' element={<MainPage/>} />
			<Route path='/hello' element={<HelloWorld/>} />
			<Route path='/about' element={<AboutPage/>} />
			<Route path='/users' element={<Users/>} />
			<Route path='/users-test' element={<UsersForTest/>} />
			<Route path='/users/:id' element={<UserDetailsPage/>} />
			<Route path='/*' element={<ErrorPage/>} />
		</Routes>
	 );
}
 
export default AppRouter;