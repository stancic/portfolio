import axios from 'axios'

const baseURL = 'https://stancic-portfolio-api.herokuapp.com/mailSend'

const sendMail = async ( mailObject ) => {
	const response = await axios.post(baseURL, mailObject)
	return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { sendMail }