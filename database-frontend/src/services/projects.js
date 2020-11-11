import axios from 'axios'

const baseURL = 'http://localhost:3333/api/projects'

const getAll = () => {
	const request = axios.get(baseURL)
	return request.then(response => response.data)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }