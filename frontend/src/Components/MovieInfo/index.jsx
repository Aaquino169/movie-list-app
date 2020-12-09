import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from "react-router-dom"
class MovieInfo  extends Component {
  constructor(props) {
    super(props)
    console.log("props:",props)

    this.state ={
      movie:{},
      movieID: props.match.params.id
    }
  }
  componentDidUpdate(){
    console.log("state in info page:",this.state.movieID)
    console.log("props in info page:",this.props.movieID)
  }

  async componentDidMount() {
    
    console.log("match:",this.props.match)
    console.log("prop in info component:", this.props.movieID)
    const url = "http://www.omdbapi.com/?"
    const apiKey = "&apikey=111970bd"
    const id = "&i="+ this.state.movieID
    const type = "&type=movie"
    console.log(url+apiKey+id+type)

    const response = await fetch(url+apiKey+id+type);
    const data = await response.json()
    if(data.Poster === "N/A"){
      data.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
    }
    console.log("api data in infopage:",data)
    this.setState({
      movie: data
    })
}


  render() {
    return(
      <div>
        <p>info page</p>
        <p>Title{this.state.movie.Title}</p>
        <p>Year {this.state.movie.Year}</p>
        <p>Rated {this.state.movie.Rated}</p>
        <p>Released {this.state.movie.Released}</p>
        <p>Runtime {this.state.movie.Runtime}</p>
        <p>Genre {this.state.movie.Genre}</p>
        <p>Director {this.state.movie.Director}</p>
        <p>Writer {this.state.movie.Writer}</p>
        <p>Actors {this.state.movie.Actors}</p>
        <p>Awards {this.state.movie.Awards}</p>
        <img src={this.state.movie.Poster} alt="img"/>
        <p>Metascore {this.state.movie.Metascore}</p>
        <p>imdbRating {this.state.movie.imdbRating}</p>
        <p>Production {this.state.movie.Production}</p>
        <p>imdbVotes {this.state.movie.imdbVotes}</p>
      </div>
    )
  }


}

export default withRouter(MovieInfo)