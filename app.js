const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const { errorMiddleware } = require('./middlewares/error.js')
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(bodyparser.json())


// app routes
app.get('*',(req,res)=>{
        res.send("lets do it")
})

module.exports = app

app.use(errorMiddleware)