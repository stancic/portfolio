import axios from 'axios'

const baseURL = 'http://localhost:3333/customcms/api/projects/ec98f81637370f86db84cf8448ecf792'

const getAll = () => {
	const request = axios.get(baseURL)
	return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }