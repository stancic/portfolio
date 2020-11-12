import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteProject } from '../reducers/projectsReducer'


function Projects({ projects }) {
	const dispatch = useDispatch()

	const handleDelete = (project) => {
		dispatch(deleteProject(project))
	}
	
	return (
		<div>
			<Table striped bordered variant="dark">
				<thead>
					<tr>
						<th>Title</th>
						<th>Git hub/lab link</th>
						<th>Live preview link</th>
						<th>Image link</th>
						<th>Remove project</th>
					</tr>
				</thead>
				<tbody>
				{
					projects.map(project => 
						<tr key={project.id}>
							<td>{project.title}</td>
							<td>{project.git}</td>
							<td>{project.live_preview}</td>
							<td><a href={project.img_link} target="blank">{project.img_link}</a></td>
							<td><Button variant="danger" onClick={() => handleDelete(project)}>Remove</Button></td>
						</tr>
					)
				}
				</tbody>
			</Table>
			
		</div>
	)
}

export default Projects
