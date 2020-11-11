const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const projectSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	git: {
		type: String,
		required: true
	},
	live_preview: {
		type: String,
	},
	description: {
		type: String,
		required: true
	}
})


projectSchema.set('toJSON',{
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project