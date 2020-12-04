import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import MovieList from "./Components/MovieList/index"

export default class App  extends Component {
  constructor() {
    super()

    this.state ={
      
    }
  }

  render() {
    return(
      <div>
        <div><MovieList search="Conjuring"/></div>
        <div><MovieList search="X-Men"/></div>
        <div><MovieList search="harry potter"/></div>        
      </div>
    )
  }


}

