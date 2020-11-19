import projectsService from '../services/projectsServices'

const projectsReducers = (state = [], action) => {
	switch(action.type){
		case 'INITIALIZE_PROJECTS':
			return action.data
		default: return state
	}
}

export const getProjects = () => {
	return async dispatch => {
		const projects = await projectsService.getAll()
		dispatch({
			type: 'INITIALIZE_PROJECTS',
			data: projects
		})
	}
}


export default projectsReducers 