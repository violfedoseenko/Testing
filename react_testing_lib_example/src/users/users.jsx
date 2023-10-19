import { useState, useEffect } from "react";
import { Link} from 'react-router-dom'
import axios from "axios";

const Users = () => {
	const [users, setUsers] = useState([])

	const loadUsers = async () => {
		const responce = await axios.get("https://jsonplaceholder.typicode.com/users")
		setUsers(responce.data)
	}

	useEffect(() => {
		loadUsers()
	}, [])

	return ( 
		<div data-testid="users-page">
			{users.map((user) => 
				<Link 
					to={`/users/${user.id}`} 
					key={user.id} 
					data-testid="user-item"
				>
					{user.name}
				</Link>)
			}
		</div>
	 );
}
 
export default Users;
