import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addProject } from '../reducers/projectsReducer'
import { logout } from '../reducers/loginReducer'

function ProjectsForm() {

	const dispatch = useDispatch()

	const [title, setTitle] = useState('')
	const [gitLink, setGitLink] = useState('')
	const [livePreviewLink, setLivePreviewLink] = useState('')
	const [imgLink, setImgLink] = useState('')
	const [description, setDescription] = useState('')
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

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<div>
			<Form onSubmit={handleAdding}>
				<br />
				<Form.Control type="text" placeholder="Title" onChange={({ target }) => setTitle(target.value)} />
				<br />
				<Form.Control type="text" placeholder="GitHub/Lab link" onChange={({ target }) => setGitLink(target.value)} />
				<br />
				<Form.Control type="text" placeholder="Live preview link" onChange={({ target }) => setLivePreviewLink(target.value)} />
				<br />
				<Form.Control type="text" placeholder="Image link" onChange={({ target }) => setImgLink(target.value)} />
				<br />
				<Form.Control type="text" placeholder="Description" onChange={({ target }) => setDescription(target.value)} />
				<br />
				<Button type="submit" variant="primary">Add to database</Button>
			</Form>
			<Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
		</div>
	)
}

export default ProjectsForm


/********** PROJECT MODEL*************
title: body.title,
git: body.git,
live_preview: body.live_preview,
img_link: body.img_link,
description: body.description
*********** PROJECT MODEL*************/
