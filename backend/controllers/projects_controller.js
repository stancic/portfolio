const projectsRouter = require('express').Router()
const Project = require('../models/projects_model')

//Get all projects
projectsRouter.get('/', async(request, response) => {
	const projects = await Project.find({})
	response.json(projects)
})