import React from 'react'
import { Table, Button } from 'react-bootstrap'

function Projects({ projects }) {
	return (
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
	)
}

export default Projects
