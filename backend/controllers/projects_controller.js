const projectsRouter = require('express').Router()
const Project = require('../models/projects_model')


//Get all projects
projectsRouter.get('/', async(request, response) => {
	const projects = await Project.find({})
	response.json(projects)
})

//Add projects
projectsRouter.post('/addproject', async(request, response) => {
	const body = request.body

	const project = new Project({
		title: body.title,
		git: body.git,
		live_preview: body.live_preview,
		description: body.description
	})

	const savedProject = await project.save()
	response.json(savedProject)
})


//Remove projects
projectsRouter.delete('/deleteproject/:id', async (request, response) => {
	const id = request.params.id
	const project = await Project.findByIdAndRemove(id)
	console.log('deleted', request.params)
	response.json(project)
})

module.exports = projectsRouter