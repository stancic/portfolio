import projectsService from '../services/projects'

const projectsReducer = (state = [], action) => {
	switch(action.type){
		case 'INIT_PROJECTS':
			return action.data
		case 'ADD_PROJECT':
			return state.concat(action.data)
		case 'DELETE_PROJECT':
			return state.filter(item => item.title !== action.data.title)
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

export const addProject = (project) => {
	return async dispatch => {
		const addedProject = await projectsService.addProject(project)
		dispatch({
			type: 'ADD_PROJECT',
			data: addedProject
		})
	}
}

export const deleteProject = (project) => {
	return async dispatch => {
		const deletedProject = await projectsService.deleteProject(project)
		dispatch({
			type: 'DELETE_PROJECT',
			data: deletedProject
		})
	}
}

export default projectsReducer