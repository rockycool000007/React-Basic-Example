import React, { Component } from "react";
import { Jumbotron, Col } from "reactstrap";

class SidePanel extends Component {
  render() {
    return (
      <Col md="4">
        <Jumbotron>
          <h4>Side Panel</h4>
        </Jumbotron>
      </Col>
    );
  }
}

export default SidePanel;
