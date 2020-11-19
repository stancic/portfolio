const loadingPageReducer = (state = true, action) => {
	switch(action.type){
		case 'LOADING...':
			return true
		case 'DONT_LOAD...':
			return false
		default: return state
	}
}

export const loadPage = () => {
	return async dispatch => {
		dispatch({
			type: 'LOADING...'
		})
	}
}

export const unload = () => {
	return async dispatch => {
		dispatch({
			type: 'DONT_LOAD...'
		})
	}
}

export default loadingPageReducer