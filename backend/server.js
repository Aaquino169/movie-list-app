const express = require("express")
const mongoose = require("mongoose")
// const session = require('express-session')
// const cors = require('cors')
const bodyParser = require("body-parser")
const app = express()

require('dotenv').config()
const port = process.env.PORT
const mongodbURI = process.env.MONGODBURI

app.use(bodyParser.json());

//middleware for mongoose
mongoose.connect(mongodbURI, { useNewUrlParser:true })
mongoose.connection.once('open', () => {
    console.log('connected to db')
})
mongoose.connection.on('error', err =>console.log(err.message))
mongoose.connection.on('disconnected', () =>console.log('mongo disconnected'))

//controllers
// const usersController = require('./controllers/users')
// app.use('/user', usersController)



app.listen(port, () => {
    console.log("running on port:",port)
})

