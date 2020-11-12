import React, { useEffect } from 'react'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'
import Projects from './components/Projects'


function App() {
	const dispatch = useDispatch()

	//Redux for getting projects
	useEffect(()=>{
		dispatch(initializeProjects())
	},[dispatch])
	
	const projects = useSelector(state => state.projects)

	return (
		<div>
			<Projects projects={projects}/>
		</div>
	)
}

export default App;
