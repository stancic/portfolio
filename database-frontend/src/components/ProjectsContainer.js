import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../reducers/loginReducer'
import { initializeProjects } from '../reducers/projectsReducer'
import Projects from './Projects'
import ProjectsForm from './ProjectsForm'

function ProjectsContainer() {
	const dispatch = useDispatch()
	const history = useHistory()

	const handleLogout = () => {
		dispatch(logout())
		history.push('/')
	}

	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])

	const projects = useSelector(state => state.projects)

	
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

export default ProjectsContainer
