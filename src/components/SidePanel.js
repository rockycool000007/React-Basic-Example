import React, { Component } from "react";
import { Jumbotron, Col } from "reactstrap";
import SidePanelStore from "../stores/SidePanelStore";

class SidePanel extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this._onChange = this._onChange.bind(this);
  }
  _onChange() {
    let value = SidePanelStore.getValue();
    this.setState({ value: value });
  }
  componentWillMount() {
    SidePanelStore.addChangeListener(this._onChange);
  }
  render() {
    return (
      <Col md="4">
        <Jumbotron>
          <h4>{this.state.value}</h4>
        </Jumbotron>
      </Col>
    );
  }
}

export default SidePanel;
