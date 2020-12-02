const bcrypt = require("bcrypt")
const express = require("express")
const users = express.Router()
const Users = require("../models/users")

const isAuthenticated = (req, res, next) =>  {
	if (req.session.currentUser) {
		return next()
	}else{
        res.status(400).json(() => {console.log('users not logged in')})
    }
}

//create route
users.post('/new', (req,res) => {
    console.log(req.body)
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    Users.create( req.body, (err, createdUser) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('User Created:', createdUser )
        res.status(200).send(createdUser)
    })
})

module.exports = users