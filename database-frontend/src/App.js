import React, {useEffect}from 'react'
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import LoginForm from './components/LoginForm'
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
          <div className="login-form-container">
            <LoginForm />
          </div>
			</div>
		)
	}
	else{
		return (
			<ProjectsContainer/>
		)
	}
	
}

export default App;
