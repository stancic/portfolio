import React, { useState } from 'react'
import './LoginForm.scss'
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
				<div className="form-input-container">
					<Form.Group controlId="formUsername">
						<Form.Label className="label-for-form">Username</Form.Label>
						<Form.Control type="text" placeholder="Enter username" onChange={({target}) => setUsername(target.value)} className="form-input"/>
					</Form.Group>
					<Form.Group controlId="formPassword">
						<Form.Label className="label-for-form">Password</Form.Label>
						<Form.Control type="password" placeholder="Password" onChange={({target}) => setPassword(target.value)} className="form-input"/>
					</Form.Group>
				</div>
				<div className="form-button-container">
					<Button variant="outline-primary" type="submit">Submit</Button>
				</div>
				</Form>
			</Route>
		</Router>
	)
}

export default LoginForm
