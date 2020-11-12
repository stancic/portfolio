const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose  = require('mongoose')
const middleware = require('./utils/middleware')

//Routers
const projectsRouter = require('./controllers/projects_controller')
const userRouter = require('./controllers/users_controller')
const loginRouter = require('./controllers/login_controller')


mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => logger.info('connected to MongoDB'))
		.catch(error => logger.error('error connecting to MongoDB: ', error.message))


app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/customcms/api/projects/ec98f81637370f86db84cf8448ecf792', projectsRouter)
app.use('/customcms/api/user/ec98f81637370f86db84cf8448ecf792', userRouter)
app.use('/customcms/api/login/ec98f81637370f86db84cf8448ecf792', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app