import axios from 'axios'

const baseURL = 'https://stancic-portfolio-api.herokuapp.com/projects/ec98f81637370f86db84cf8448ecf792'

const getAll = () => {
	const request = axios.get(baseURL)
	return request.then(response => response.data)
}

const deleteProject = async objectToDelete => {
	let newURL = baseURL + `/deleteproject/${objectToDelete.id}`
	const response = await axios.delete(newURL)
	return response.data
}	

const addProject = async objectToAdd => {
	let newURL = baseURL + '/addproject'
	const response = await axios.post(newURL, objectToAdd)
	return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, deleteProject, addProject }