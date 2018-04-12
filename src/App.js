import React, { Component } from "react";
import "./App.css";
import { Row, Container } from "reactstrap";

import Header from "./components/Header";
import MainPanel from "./components/MainPanel";
import SidePanel from "./components/SidePanel";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="py-3">
          <Row>
            <MainPanel />
            <SidePanel />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
