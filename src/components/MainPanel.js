import React, { Component } from "react";
import { Jumbotron, Col, FormGroup, Label, Input } from "reactstrap";
import AppActions from "../actions/AppActions";

class MainPanel extends Component {
  handleChange(e) {
    AppActions.addItem(e.target.value);
  }
  render() {
    return (
      <Col md="8">
        <Jumbotron>
          <h1 className="display-3 py-3">Hello, {this.props.name}!</h1>

          <FormGroup>
            <Label for="exampleEmail">Enter Amount 100 to 200</Label>
            <Input
              type="number"
              name="email"
              id="exampleEmail"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Jumbotron>
      </Col>
    );
  }
}

export default MainPanel;
