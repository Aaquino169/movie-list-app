const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    "Title": {type:String, require:true},
    "Year": {type:String, require:true},
    "Rated": {type:String},
    "Released": {type:String},
    "Runtime": {type:String},
    "Genre": {type:String},
    "Director": {type:String },
    "Writer": {type:String},
    "Actors": {type:String},
    "Plot": {type:String},
    "Awards": {type:String},
    "Poster": {type:String, require:true},
    "Metascore": {type:String},
    "imdbRating": {type:String},
    "imdbVotes": {type:String},
    "imdbID": {type:String, require:true},
})

