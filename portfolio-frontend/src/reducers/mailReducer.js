import mailService from '../services/mailService'

const mailReducers = (state = {}, action) => {
	switch(action.type){
		case 'SEND_MAIL':
			return action.data
		default: return state
	}
}

export const send = (mailObject) => {
	return async dispatch => {
		let mail = await mailService.sendMail(mailObject)
		console.log(mail)
		dispatch({
			type: 'SEND_MAIL',
			data: { mail }
		})
	}
}

export default mailReducers