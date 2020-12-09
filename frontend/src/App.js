import React, {Component} from "react";
import "../src/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Redirect} from "react-router-dom"
import HomeScreenDisplay from "./Components/HomeScreenDisplay/index"
import NavBar from "./Components/NavBar/index"
import UserLogin from "./Components/UserLogin/index"
import MovieInfo from "./Components/MovieInfo/index"
import UserListPage from "./Components/UserListPage/index"



export default class App  extends Component {
  constructor(props) {
    super(props)

    this.state ={
      loggedIn:false,
      loggedInUsername:"",
      targetMovie:""
    }
  }
  
  componentDidUpdate(){
    
    console.log("state in app.js:",this.state)

  }

  
  targetMovieID = (movieID) => {
    this.setState({
      targetMovie: movieID
    })

  }

  // checkLoginStatus = (boolean) => {
  //   this.setState({
  //     loggedIn: boolean
  //   })
  // }

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
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("loginResponse:", loginResponse);
      const loginJson = await loginResponse.json()
      console.log("loginJson:", loginJson);
  
      if(loginResponse.status === 200) {
          console.log("im logged in")
          
          // this.changeValue({loggedIn:true})
          this.setState({
            loggedIn: true,
            
          })
        console.log("state in app.js:",this.state)

        }
    } catch(error) {
      console.error("Error trying to log in")
      console.error(error)
    }
  }
  
  userLogout = async () => {
    try {
      const url = "http://localhost:8000/login/logout"
  
      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("logoutResponse", logoutResponse);
      const logoutJson = await logoutResponse.json()
      console.log("logoutJson", logoutJson);
  
      if(logoutResponse.status === 200) {
        this.setState({
          loggedIn: false,
        })
  
      }
  
    } catch(error) {
      console.error("Error logging out")
      console.error(error)
    }
  }

  changeValue = (value) => {
    this.setState(value)
  }

  render() {
    console.log("state in app.js:",this.state)
    if(this.state.targetMovie) {
      return(
        <Redirect to={"/movieInfo/"+ this.state.targetMovie}/>
      )
    }
    return(
        <div>
            {
              this.state.loggedIn
              ?
              <NavBar loggedIn={this.state.loggedIn} userLogout={this.userLogout}/>
              :
              <NavBar/>
            }
            
            <Switch>
              <Route path="/myList">
                <UserListPage/>
              </Route>
              <Route path="/movieInfo/:id">
                <MovieInfo movieID={this.state.targetMovie} />
              </Route>
              <Route path="/home">
                <HomeScreenDisplay targetMovieID={this.targetMovieID}/>
              </Route>
              <Route path="/login">
                <UserLogin checkLoginStatus={this.checkLoginStatus} newUser={this.newUser} userLogin={this.userLogin} />
              </Route> 
            </Switch>
        </div>
    )
  }


}

