const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/user_model')

userRouter.get('/', async(request, response) => {
	const users = await User.find({})
	response.json(users)
})


module.exports = userRouter