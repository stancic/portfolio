import axios from 'axios'
const baseURL = 'https://stancic-portfolio-api.herokuapp.com/login/ec98f81637370f86db84cf8448ecf792'

const login = async credentials => {
	const response = await axios.post(baseURL, credentials)
	return response.data
}


// eslint-disable-next-line
export default { login }