import React,{ Component } from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import LoginUser from "../UserLogin/loginUser"
import NewUserLogin from "../UserLogin/newUserLogin"

export default class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
          <Router>
          <div>
            <Switch>
            <Route path="/login">
              <LoginUser userLogin={this.props.userLogin} />
            </Route>
            <Route path="/newUserLogin">
              <NewUserLogin newUser={this.props.newUser} />
            </Route>
              <Route path="/newUserLogin" component={NewUserLogin}/>
            </Switch>
          </div>
        </Router>
        )
    }
} 