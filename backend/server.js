const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const port = 8000

app.use(bodyParser.json());

//middleware for mongoose
mongoose.connect("mongodb://localhost:27017/movieListApp", { useNewUrlParser:true })
mongoose.connection.once('open', () => {
    console.log('connected to db')
})
mongoose.connection.on('error', err =>console.log(err.message))
mongoose.connection.on('disconnected', () =>console.log('mongo disconnected'))





app.listen(port, () => {
    console.log("running on port:",port)
})

