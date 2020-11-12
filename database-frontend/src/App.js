import React, { useEffect, useState } from 'react'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'
import Projects from './components/Projects'
import ProjectsForm from './components/ProjectsForm'
import LoginForm from './components/LoginForm'


function App() {
	const dispatch = useDispatch()


	let user = useSelector(state => state.user)

	//Redux for getting projects
	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])
	

	const projects = useSelector(state => state.projects)

	if(user === null){
		return(
			<LoginForm />
		)
	}
	else{
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
	
}

export default App;
