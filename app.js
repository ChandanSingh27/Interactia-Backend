const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const usersRouter = require('./routes/users.js')
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(bodyparser.json())


// app routes


module.exports = app
