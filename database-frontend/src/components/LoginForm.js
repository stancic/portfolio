import React, { useState } from 'react'
import './LoginForm.scss'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/loginReducer'

function LoginForm() {
	const dispatch = useDispatch()

	let userStatus = useSelector(state => state.user)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	
	const handleLogin = async (event) => {
		event.preventDefault()
		dispatch(login({ username, password }))
		if(userStatus === 401){
			setUsername('')
			setPassword('')
		}
	}

	return (
		<div className="login-parent-container">
			<div className="login-container">
				<div className="img-and-login-form-container">
					<div className="img-container">
						<img src="./img/Logo.png" alt="" className="login-form-image" />
					</div>
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
							<Button variant="outline-primary" type="submit">Log in</Button>
						</div>
					</Form>
				</div>
			</div>	
		</div>
	)
}

export default LoginForm
