const pageStatusReducer = (state="/", action) => {
	switch(action.type){
		case 'SWITCH_PAGE':
			return action.data
		default: return state
	}
}


export const switchPage = (link) => {
	return async dispatch => {
		dispatch({
			type: 'SWITCH_PAGE',
			data: link
		})
	}
}

export default pageStatusReducer