import projectsService from '../services/projects'

const projectsReducer = (state = [], action) => {
	switch(action.type){
		case 'INIT_PROJECTS':
			return action.data
		default: return state
	}
}

export const initializeProjects = () => {
	return async dispatch => {
		const projects = await projectsService.getAll()
		dispatch({
			type: 'INIT_PROJECTS',
			data: projects
		})
	}
}

export default projectsReducer