import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import MovieList from "./Components/MovieList/index"
import NavBar from "./Components/NavBar"

export default class App  extends Component {
  constructor() {
    super()

    this.state ={
      
    }
  }

  render() {
    return(
      <div>
        <NavBar/>
        <div><MovieList search="Conjuring" title="Scary Movies"/></div>
        <div><MovieList search="X-Men" title="Xmen Movies"/></div>
        <div><MovieList search="harry potter" title="Harry Potter Series"/></div>        
      </div>
    )
  }


}

