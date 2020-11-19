const pageStatusReducer = (state="/", action) => {
	switch(action.type){
		case 'HOME':
			return action.data
		case 'PROJECTS':
			return action.data
		case 'CONTACT':
			return action.data
		default: return state
	}
}


export const goHome = (data) => {
	return async dispatch => {
		dispatch({
			type: 'HOME',
			data: data
		})
	}
}

export const goProjects = (data) => {
	return async dispatch => {
		dispatch({
			type: 'PROJECTS',
			data: data
		})
	}
}

export const goContact = (data) => {
	return async dispatch => {
		dispatch({
			type: 'CONTACT',
			data: data
		})
	}
}

export default pageStatusReducer