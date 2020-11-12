import React, { useEffect } from 'react'
import { initializeProjects } from './reducers/projectsReducer'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

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
			<Table striped bordered variant="dark">
				<thead>
					<tr>
						<th>Title</th>
						<th>Git hub/lab link</th>
						<th>Live preview link</th>
						<th>Remove project</th>
					</tr>
				</thead>
				<tbody>
				{projects.map(project => 
					<tr key={project.id}>
						<td>{project.title}</td>
						<td>{project.git}</td>
						<td>{project.live_preview}</td>
						<td><Button variant="danger">Remove</Button></td>
					</tr>
				)
				}
				</tbody>
			</Table>
		</div>
	)
}

export default App;
