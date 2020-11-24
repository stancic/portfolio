import axios from 'axios'

const baseURL = 'http://localhost:3333/mailSend'

const sendMail = async ( mailObject ) => {
	const response = await axios.post(baseURL, mailObject)
	return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { sendMail }