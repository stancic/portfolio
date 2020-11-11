import React, { useEffect, useState } from 'react'
import projectsService from './services/projects'

function App() {

	const [projects, setProjects] = useState()
	
	useEffect(()=>{
		projectsService.getAll().then(
			projects => setProjects(projects)
		)
	}, [])

	console.log(projects)
	return (
		<div>
			<h1>hehe</h1>
		</div>
	)
}

export default App;
