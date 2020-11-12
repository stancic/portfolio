import React, { useEffect } from 'react'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'
import Projects from './components/Projects'
import ProjectsForm from './components/ProjectsForm'

function App() {
	const dispatch = useDispatch()

	//Redux for getting projects
	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])
	
	const projects = useSelector(state => state.projects)

	return (
		<div>
			<div className="project-table-container">
				<Projects projects={projects}/>
			</div>
			<div className="project-form-container">
				<ProjectsForm />
			</div>
		</div>
	)
}

export default App;
