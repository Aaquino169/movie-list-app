import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom"

export default class MovieInfo  extends Component {
  constructor(props) {
    super(props)

    this.state ={
      movie:[]
    }
  }

  async componentDidMount() {
    console.log("prop in info component:", this.props.id)
    console.log("movie list function is running")
    const url = "http://www.omdbapi.com/?"
    const apiKey = "&apikey=111970bd"
    const id = "&i="+ this.props.id
    const type = "&type=movie"
    console.log(url+apiKey+id+type)

    const response = await fetch(url+apiKey+id+type);
    const data = await response.json()
    console.log("data:",data)
    const movieData = []
    // data.forEach(element => {
    //     if(element.Poster === "N/A"){
    //         element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
    //     }
    //     movieData.push(element)
    //     });
    //     console.log("movieData:", movieData)
    //     this.setState({
    //         movie: movieData
    // })
}

    displayInfo() {
        return this.state.movie.map(movie => {
            return (
                <div>
                    <p>Title{movie.Title}</p>
                    <p>Year {movie.Year}</p>
                    <p>Rated {movie.Rated}</p>
                    <p>Released {movie.Released}</p>
                    <p>Runtime {movie.Runtime}</p>
                    <p>Genre {movie.Genre}</p>
                    <p>Director {movie.Director}</p>
                    <p>Writer {movie.Writer}</p>
                    <p>Actors {movie.Actors}</p>
                    <p>Awards {movie.Awards}</p>
                    <img src={movie.Poster} alt="img"/>
                    <p>Metascore {movie.Metascore}</p>
                    <p>imdbRating {movie.imdbRating}</p>
                    <p>Production {movie.Production}</p>
                    <p>imdbVotes {movie.imdbVotes}</p>
                </div>   
            )
        })
    }

    // {this.displayInfo()}
  render() {
    return(
      <div>
        <p>info page</p>
        {this.displayInfo()}
      </div>
    )
  }


}