import React,{ Component } from "react"
import {Switch, Route} from "react-router-dom"
import LoginUser from "../UserLogin/loginUser"
import NewUserLogin from "../UserLogin/newUserLogin"


export default class LogIn extends Component {


    render() {
        return(
          <div>
            <Switch>
            <Route path="/login">
              <LoginUser checkLoginStatus={this.props.checkLoginStatus} userLogin={this.props.userLogin} />
            </Route>
            <Route path="/newUserLogin">
              <NewUserLogin newUser={this.props.newUser} />
            </Route>
              <Route path="/newUserLogin" component={NewUserLogin}/>
            </Switch>
          </div>
        )
    }
} 