import loginService from '../services/loginServices'

const loginReducer = (state = null, action) => {
	switch(action.type){
		case 'LOGIN':
			return action.data.user
		case 'LOGOUT':
			return action.data
		default: return state
	}
}

export const login = tryToLogIn => {
	return async dispatch => {
		const user = await loginService.login(tryToLogIn)
		dispatch({
			type: 'LOGIN',
			data: { user } 
		})
	}
}

export const logout = () => {
	return async dispatch => {
		dispatch({
			type: 'LOGOUT',
			data: null
		})
	}
}

export default loginReducer