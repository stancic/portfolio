import React, { useEffect } from 'react'
import './App.scss'
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
			<div className="login-container">
					<div className="img-and-login-form-container">
						<div className="img-container">
							<img src="./img/Logo.png" alt="" className="login-form-image" />
						</div>
						<div className="login-form-container">
							<LoginForm />
						</div>
				</div>
			</div>
		)
	}
	else{
		return (
			<div className="form-container">
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
