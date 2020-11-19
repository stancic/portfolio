const pageStatusReducer = (state="/", action) => {
	switch(action.type){
		case 'SWITCH_PAGE':
			return action.data
		default: return state
	}
}


export const goHome = (data) => {
	return async dispatch => {
		dispatch({
			type: 'SWITCH_PAGE',
			data: data
		})
	}
}

export default pageStatusReducer