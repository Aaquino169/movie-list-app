import React, {Component} from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import MovieInfo from "../MovieInfo/index"



export default class MovieHome  extends Component {
    constructor(props) {
        super(props)

        this.state ={
            moviesList:[],
            targetMovie:""
        }

    }

    componentDidUpdate(){
        console.log(this.state.targetMovie)
    }
    
    async componentDidMount() {
        const url = "http://www.omdbapi.com/?"
        const apiKey = "&apikey=111970bd"
        const search = "&s="+ this.props.search
        const type = "&type=movie"

        const response = await fetch(url+apiKey+type+search);
        const data = await response.json()
        const dataList = []
        data.Search.forEach(element => {
            if(element.Poster === "N/A"){
                element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
            }
            dataList.push(element)
        });
        console.log("dataList:", dataList)
        this.setState({
            moviesList: dataList
        })
    }

    target = (movieID) => {
        console.log("logged e:",movieID)
        this.props.targetMovieID(movieID)
    }


    list() {
        return this.state.moviesList.map(movie => {
            return (
                <Card style={{ width: '18rem' }} className="bg-dark text-white movie-card" key={movie.imdbID}>
                <Link to="/movieInfo">
                    <Card.Img variant="top" src={movie.Poster} onClick={() => (this.target(movie.imdbID))}/>
                </Link>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Year}</Card.Text>
                    <Button variant="primary">Add To Favorites</Button>
                </Card.Body>
                </Card>    
            )
        })
    }

    
    

    // I want to be able to render this: {this.state.moviesList[0].Title}
    // console.log(this.state.moviesList[0].Title)
    //  <img src={this.state.moviesList[0].Poster} alt=""/>
    //                <p>{this.state.moviesList[0]}</p>



    render() {

        return(
            <div>
                <Router>
                    <h2>{this.props.title}</h2>
                    <div className= "card-container">
                        {this.list()}
                    </div>
                </Router>
            </div>
            
            
        )
    }

}