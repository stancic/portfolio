import axios from 'axios'
const baseURL = 'http://localhost:3333/customcms/api/login/ec98f81637370f86db84cf8448ecf792'

const login = async credentials => {
	const response = await axios.post(baseURL, credentials)
	console.log('login service: ', response.data)
	return response.data
}

export default { login }