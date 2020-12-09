import React, {Component} from "react";
import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"


export default class NavBar  extends Component {
    constructor(props) {
        super(props)
        console.log("props info page:", props)
        this.state ={
            searchText:"",
            searchData:[],
            loggedIn: props.loggedIn

        }
    }
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }

    // handleSubmit () {
    //     componentDidMount()
    //     const url = "http://www.omdbapi.com/?i=tt3896198"
    //     const apiKey = "&apikey=111970bd"
    //     const search = "&s="+ this.props.search
    //     const type = "&type=movie"

    //     const response = await fetch(url+apiKey+type+search);
    //     const data = await response.json()
    //     const dataList = []
    //     data.Search.forEach(element => {
    //         if(element.Poster === "N/A"){
    //             element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
    //         }

            
    //         dataList.push(element)
    //     });
    //     console.log("searchData:", dataList)
    //     this.setState({
    //         searchData: dataList
    //     })
    // }

    // async componentDidMount() {
    //     const url = "http://www.omdbapi.com/?i=tt3896198"
    //     const apiKey = "&apikey=111970bd"
    //     const search = "&s="+ this.props.search
    //     const type = "&type=movie"

    //     const response = await fetch(url+apiKey+type+search);
    //     const data = await response.json()
    //     const dataList = []
    //     data.Search.forEach(element => {
    //         if(element.Poster === "N/A"){
    //             element.Poster= "https://myerstest.com/wp-content/uploads/2017/07/NO-IMG-AVAILABLE.jpg"
    //         }

            
    //         dataList.push(element)
    //     });
    //     console.log("searchData:", dataList)
    //     this.setState({
    //         searchData: dataList
    //     })
    // }
    
    render() {
        
        return(
            <div>
                    
                    
                            <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="/home">MyMovieList</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/myList">My List</Nav.Link>
                            </Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link onClick={this.props.userLogout}>Log Out</Nav.Link>
                            <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
                            <Button variant="outline-info">Search</Button>
                            </Form>
                            </Navbar>
                        
                    
            </div>
        )
    }
}