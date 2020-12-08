import React, {Component} from "react";
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomeScreenDisplay from "./Components/HomeScreenDisplay/index"
import NavBar from "./Components/NavBar"
import UserLogin from "./Components/UserLogin"
import MovieInfo from "./Components/MovieInfo"



export default class App  extends Component {
  constructor() {
    super()

    this.state ={
      LoggedIn:null,
      targetMovie:""
    }
    // this.targetMovieID.bind
  }
  
  componentDidUpdate(){
    
    console.log("in app.js(cdu):",this.state.targetMovie)
  }

  
  targetMovieID = (movieID) => {
    this.setState({
      targetMovie: movieID
    })

}

  render() {
    
    return(
      <Router forceRefresh={true}>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/movieInfo">
              <MovieInfo movieID={this.state.targetMovie} />
            </Route>
            <Route path="/home">
              <HomeScreenDisplay targetMovieID={this.targetMovieID}/>
            </Route> 
            <Route path="/login" component={UserLogin}/>
          </Switch>
        </div>
      </Router>
    )
  }


}

