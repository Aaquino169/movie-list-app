import React, {Component} from "react";
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import HomeScreenDisplay from "./Components/HomeScreenDisplay/index"
import NavBar from "./Components/NavBar"
import UserLogin from "./Components/UserLogin"
import MovieInfo from "./Components/MovieInfo"



export default class App  extends Component {
  constructor(props) {
    super(props)

    this.state ={
      loggedIn:true,
      loggedInUsername:"",
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

  newUser = async (registerInfo) => {

    const url = 'http://localhost:8000/user/new'
  
    try {
        const registerResponse = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(registerInfo),
            headers: {
              'Content-Type': 'application/json'
            }
      })
      console.log("registerResponse", registerResponse);
      const registerJson = await registerResponse.json()
      console.log("registerJson", registerJson);
  
       if(registerResponse.status === 201) {
         this.setState({
           loggedIn: true,
           loggedInUsername: registerJson.data.username
         })
       }
    } catch(err) {
      console.error("Error trying to register with API")
      console.error(err)
    }
  }

  userLogin = async (loginInfo) => {
    const url = 'http://localhost:8000/login'
  
    try {
      const loginResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("loginResponse", loginResponse);
      const loginJson = await loginResponse.json()
      console.log("loginJson", loginJson);
      console.log(loginJson.cart)
  
      if(loginResponse.status === 200) {
          this.setState({
            loggedIn: true,
            loggedInUsername: loginJson.username,
            id: loginJson._id,
            cart: loginJson.cart
        })
        }
    } catch(error) {
      console.error("Error trying to log in")
      console.error(error)
    }
  }
  
  userLogout = async () => {
    try {
      const url = ''
  
      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("logoutResponse", logoutResponse);
      const logoutJson = await logoutResponse.json()
      console.log("logoutJson", logoutJson);
  
      if(logoutResponse.status === 200) {
        this.setState({
          loggedIn: false,
          loggedInUsername: ''
        })
  
      }
  
    } catch(error) {
      console.error("Error logging out")
      console.error(error)
    }
  }

//removed from line 132 movieID={this.state.targetMovie} 
  render() {
    if(this.state.targetMovie) {
      return(
        <Redirect to={"/movieInfo/"+ this.state.targetMovie}/>
      )
    }
    return(
        <div>
            <NavBar/>
            <Switch>
              <Route path="/movieInfo/:id">
                <MovieInfo movieID={this.state.targetMovie} />
              </Route>
              <Route path="/home">
                <HomeScreenDisplay targetMovieID={this.targetMovieID}/>
              </Route>
              <Route path="/login">
                <UserLogin newUser={this.newUser} userLogin={this.userLogin} userLogout={this.userLogout} />
              </Route> 
            </Switch>
        </div>
    )
  }


}

