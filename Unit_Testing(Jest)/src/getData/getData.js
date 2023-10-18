const axios = require('axios')
const mapArrToString = require('../mapArrToStrings/mapArrToStrings')

const getData = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		const userIds = response.data.map(user => user.id)
		return mapArrToString(userIds)
	} catch  (e) {
		console.log(e)
	}
}

module.exports = getData