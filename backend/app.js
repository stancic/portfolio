const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose  = require('mongoose')

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(() => logger.info('connected to MongoDB'))
		.catch(error => logger.error('error connecting to MongoDB: ', error.message))


app.use(cors())
app.use(express.static('build'))
app.use(express.json())


module.exports = app