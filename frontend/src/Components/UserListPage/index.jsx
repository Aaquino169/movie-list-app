import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab,Row,ListGroup,Col,Sonnet} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default class UserListPage  extends Component {
  constructor(props) {
    super(props)

    this.state ={
      movie:[]
    }
  }

  async componentDidMount() {
    const url = "http://localhost:8000/"
    const apiKey = "&apikey=111970bd"
    const search = "&s="+ this.props.search
    const type = "&type=movie"

    const response = await fetch(url+apiKey+type+search);
    const data = await response.json()
    const dataList = []
    data.Search.forEach(element => {
        if(element.Poster === "N/A"){
            element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
        }
        dataList.push(element)
    });
    console.log("dataList:", dataList)
    this.setState({
        moviesList: dataList
    })
  }

  addMovie = async (movie) => {

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


  render() {
    return(
      <div>
        
      </div>
    )
  }


}