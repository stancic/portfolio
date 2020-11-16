import React, { useEffect } from 'react'
import './App.scss'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'
import Projects from './components/Projects'
import ProjectsForm from './components/ProjectsForm'
import LoginForm from './components/LoginForm'
import { Button } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { logout } from './reducers/loginReducer'


function App() {
	const dispatch = useDispatch()


	let user = useSelector(state => state.user)

	//Redux for getting projects
	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])
	
	const handleLogout = () => {
		dispatch(logout())
	}

	const projects = useSelector(state => state.projects)

	if(user === null){
		return(
			<div className="login-parent-container">
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
			</div>
		)
	}
	else{
		return (
			<div className="cms-container">
				<div className="top-container">
					<div className="top-image-and-header-container">
						<div className="top-img-container">
							<img src="./img/Logo.png" alt=""/>
						</div>
						<div className="top-header-container">
							<h3>Mini CMS</h3>
						</div>
						<div className="logout-button-container">
							<Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
						</div>
					</div>
				</div>
				<div className="bottom-container">
					<div className="form-container">
						<div className="project-table-container">
							<Projects projects={projects}/>
						</div>
						<div className="project-form-container">
							<ProjectsForm />
						</div>
					</div>
				</div>
			</div>	
			
		)
	}
	
}

export default App;
