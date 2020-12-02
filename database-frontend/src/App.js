import React, {useEffect}from 'react'
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectsContainer from './components/ProjectsContainer'
import Notification from './components/Notification'
import { showNotification } from './reducers/notificationStatusReducer'

function App() {
	const dispatch = useDispatch()

	let user = useSelector(state => state.user)

	useEffect(()=> {
		if(user === 401){
			dispatch(showNotification())
		}
	})

	if(user === null || user === 401){
		return(
			<div>
				<Notification />
				<Router>
					<Switch>
						<Route path="/">
							<div className="login-form-container">
								<LoginForm />
							</div>
						</Route>
					</Switch>
				</Router>
			</div>
		)
	}
	else{
		return (
			<Router>
				<Switch>
					<Route path="/minicms">
						<ProjectsContainer/>
					</Route>
				</Switch>	
			</Router>
		)
	}
	
}

export default App;
