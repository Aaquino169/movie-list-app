import React, {Component} from "react";
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import HomeScreenDisplay from "./Components/HomeScreenDisplay/index"
import NavBar from "./Components/NavBar"
import UserLogin from "./Components/UserLogin"

export default class App  extends Component {
  constructor() {
    super()

    this.state ={
      
    }
  }

  render() {
    return(
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/" component={HomeScreenDisplay}/>
            <Route path="/login" component={UserLogin}/>
          </Switch>
        </div>
      </Router>
    )
  }


}

