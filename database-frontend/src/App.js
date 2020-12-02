import React, { useEffect } from 'react'
import './App.scss'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectsContainer from './components/ProjectsContainer'


function App() {
	const dispatch = useDispatch()


	let user = useSelector(state => state.user)

	//Redux for getting projects
	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])
	



	if(user === null){
		return(
			<Router>
				<Switch>
					<Route path="/">
						<div className="login-form-container">
							<LoginForm />
						</div>
					</Route>
				</Switch>
			</Router>
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
