import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default class App  extends Component {
  constructor(props) {
    super(props)

    this.state ={
      movie:[]
    }
  }

  render() {
    return(
      <div>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                <ListGroup>
                    <ListGroup.Item action href="#link1">
                    Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                    Link 2
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                    <Sonnet />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                    <Sonnet />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        
      </div>
    )
  }


}