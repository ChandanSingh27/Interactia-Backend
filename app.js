const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const { errorMiddleware } = require('./middlewares/error.js')
const userRouter = require('./routes/usersRoutes.js')
const app = express()
require('dotenv/config')

const api_version = process.env.API_VERSION

//all middleware of the app here...
app.use(bodyparser.json())
app.use(morgan('dev'))

//all routes of app...
app.use(`${api_version}/users`,userRouter)

module.exports = app
//below line add because its handle all error
app.use(errorMiddleware)

