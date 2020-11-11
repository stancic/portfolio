const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.static('build'))
app.use(express.json())


module.exports = app