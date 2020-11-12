import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { login } from '../reducers/loginReducer'

function LoginForm() {
	const dispatch = useDispatch()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const handleLogin = async (event) => {
	event.preventDefault()
	dispatch(login({ username, password }))
	setUsername('')
	setPassword('')
}

	return (
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

export default LoginForm
