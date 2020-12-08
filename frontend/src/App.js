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
      LoggedIn:null
    }
  }

  render() {
    return(
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/home" component={HomeScreenDisplay}/>
            <Route path="/login" component={UserLogin}/>
          </Switch>
        </div>
      </Router>
    )
  }


}

