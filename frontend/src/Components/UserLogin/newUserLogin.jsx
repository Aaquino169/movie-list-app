import React,{ Component } from "react"
import {Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom"


export default class NewUserLogin extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: ''
        }

    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      
      handleSubmit = (event) => {
        event.preventDefault()
        console.log()
        console.log("state in new user:",this.state);
        this.props.newUser(this.state)
       }

    render() {
        return(
            <div>
                <h1>Register New User</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>
                        <Link to="/Login">
                            <p>Already have an Account?</p>
                        </Link>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </div>
        )
    }
} 