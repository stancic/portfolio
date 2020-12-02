const notificationStatusReducer = (state = false, action) => {
	switch(action.type){
		case 'SHOW_NOTIFICATION':
			return action.data
		case 'HIDE_NOTIFICATION':
			return action.data
		default: return state
	}
}


export const showNotification = () => {
	return async dispatch => {
		dispatch({
			type: 'SHOW_NOTIFICATION',
			data: true
		})
	}
}

export const hideNotification = () => {
	return async dispatch => {
		dispatch({
			type: 'HIDE_NOTIFICATION',
			data: false
		})
	}
}


export default notificationStatusReducer