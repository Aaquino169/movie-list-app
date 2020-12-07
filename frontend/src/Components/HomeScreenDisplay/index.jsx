import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieHome from "../MovieHome/index"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import NavBar from "../NavBar/index"

export default class HomeScreenDisplay  extends Component {
  constructor() {
    super()

    this.state ={
      
    }
  }

  render() {
    return(
      <div>        
        <div><MovieHome search="Conjuring" title="Scary Movies"/></div>
        <div><MovieHome search="X-Men" title="Xmen Movies"/></div>
        <div><MovieHome search="harry potter" title="Harry Potter Series"/></div>        
      </div>
    )
  }


}