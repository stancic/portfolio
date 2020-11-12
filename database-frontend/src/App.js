import React, { useEffect, useState } from 'react'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'
import Projects from './components/Projects'
import ProjectsForm from './components/ProjectsForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { login } from './reducers/loginReducer'

function App() {
	const dispatch = useDispatch()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	let user = useSelector(state => state.user)

	//Redux for getting projects
	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])
	
	const handleLogin = async (event) => {
		event.preventDefault()
		dispatch(login({ username, password }))
		setUsername('')
		setPassword('')
	}
	const projects = useSelector(state => state.projects)

	if(user === null){
		return(
			<Router>
				<Route path="/">
				<Form onSubmit={handleLogin}>
					<Form.Group controlId="formUsername">
    					<Form.Label>Username</Form.Label>
    					<Form.Control type="text" placeholder="Enter username" onChange={({target}) => setUsername(target.value)}/>
					</Form.Group>
					<Form.Group controlId="formPassword">
    					<Form.Label>Password</Form.Label>
    					<Form.Control type="password" placeholder="Password" onChange={({target}) => setPassword(target.value)}/>
					</Form.Group>
						<Button variant="primary" type="submit">Submit</Button>
					</Form>
				</Route>
			</Router>
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
