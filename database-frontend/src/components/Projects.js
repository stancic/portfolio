import React, { useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteProject, addProject } from '../reducers/projectsReducer'

/********** PROJECT MODEL*************
title: body.title,
git: body.git,
live_preview: body.live_preview,
img_link: body.img_link,
description: body.description
*********** PROJECT MODEL*************/



function Projects({ projects }) {

	const [title, setTitle] = useState('')
	const [gitLink, setGitLink] = useState('')
	const [livePreviewLink, setLivePreviewLink] = useState('')
	const [imgLink, setImgLink] = useState('')
	const [description, setDescription] = useState('')

	const dispatch = useDispatch()

	const handleDelete = (project) => {
		dispatch(deleteProject(project))
	}


	const handleAdding = (event) => {
		event.preventDefault()
		const projectToAdd = {
			title: title,
			git: gitLink,
			live_preview: livePreviewLink,
			img_link: imgLink,
			description: description
		}
		console.log(projectToAdd)
		dispatch(addProject(projectToAdd))
		setTitle('')
		setGitLink('')
		setLivePreviewLink('')
		setImgLink('')
		setDescription('')
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
				{projects.map(project => 
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
			<Form onSubmit={handleAdding}>
				<br />
				<Form.Control type="text" placeholder="Title" onChange={({target}) => setTitle(target.value)}/>
				<br />
				<Form.Control type="text" placeholder="GitHub/Lab link" onChange={({target}) => setGitLink(target.value)}/>
				<br />
				<Form.Control type="text" placeholder="Live preview link" onChange={({target}) => setLivePreviewLink(target.value)}/>
				<br />
				<Form.Control type="text" placeholder="Image link" onChange={({target}) => setImgLink(target.value)}/>
				<br />
				<Form.Control type="text" placeholder="Description" onChange={({target}) => setDescription(target.value)}/>
				<br />
				<Button type="submit" variant="primary">Add to database</Button>
			</Form>
		</div>
	)
}

export default Projects
