import React, { useEffect } from 'react'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'


function App() {
	const dispatch = useDispatch()

	//Redux for getting projects
	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])
	
	const projects = useSelector(state => state.projects)
	console.log(projects)

	return (
		<div>
			<h1>hehe</h1>
		</div>
	)
}

export default App;
