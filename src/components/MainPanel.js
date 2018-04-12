import React, { Component } from "react";
import { Jumbotron, Col } from "reactstrap";
class MainPanel extends Component {
  render() {
    return (
      <Col md="8">
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
        </Jumbotron>
      </Col>
    );
  }
}

export default MainPanel;
