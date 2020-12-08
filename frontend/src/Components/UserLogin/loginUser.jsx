import React,{ Component } from "react"
import {Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

export default class LogUser extends Component {
    constructor(props) {
        super()
        this.state = {

        }

    }

    render() {
        return(
            <div>
                <h1>User Log In</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username " />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Link to="/newUserLogin">
                            <p>New User?</p>
                        </Link>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </div>
        )
    }
} 