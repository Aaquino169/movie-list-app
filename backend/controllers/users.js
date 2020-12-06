const bcrypt = require("bcrypt")
const express = require("express")
const users = express.Router()
const fetch =require("node-fetch")
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

//add to list
users.put('/addToList/:imdbID', isAuthenticated, async (req,res) => {
    try {
        const url = "http://www.omdbapi.com/?"
        const apiKey = "&apikey=111970bd"
        const imdbID = "&i="+ req.params.imdbID
        const type = "&type=movie"
        const response = await fetch(url+apiKey+imdbID+type);
        const data = await response.json()


        let currentUser = req.session.currentUser

        let userData = await Users.findById(currentUser._id)

        userData["Movie List"].push(data)

        console.log(userData)

        userData.save()

        res.status(200).send(userData)

    } catch (err) {

        res.status(400).json({ err: err.message})
    }
})

//remove from list 
users.put('/removeFromList/:imdbID', isAuthenticated, async (req,res) => {
    try {
        let currentUser = req.session.currentUser

        let userData = await Users.findById(currentUser._id)

        let list = userData["Movie List"]

        for(i in list) {
            if(list[i].imdbID == req.params.imdbID) {
                list.splice(i,1)
            }
        }

        userData.save()

        res.status(200).send(userData)

    } catch (err) {
        res.status(400).json({ err: err.message})
    }
})

module.exports = users