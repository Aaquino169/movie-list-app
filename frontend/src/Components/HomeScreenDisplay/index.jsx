import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieHome from "../MovieHome/index"

export default class HomeScreenDisplay  extends Component {
  constructor(props) {
    super(props)

    this.state ={
      targetMovie:""
    }
  }

  



  render() {
    // if(this.state.targetMovie) {
    //   return(
    //     <Redirect to={"/movieInfo/"+ this.state.targetMovie}/>
    //   )
    // }
    return(
      <div>        
        <div><MovieHome targetMovieID={this.props.targetMovieID} search="Conjuring" title="Scary Movies"/></div>
        <div><MovieHome search="X-Men" title="Xmen Movies"/></div>
        <div><MovieHome search="harry potter" title="Harry Potter Series"/></div>        
      </div>
    )
  }


}