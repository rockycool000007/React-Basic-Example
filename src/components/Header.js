import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div class="container">
            <NavbarBrand>Lloyds Banking Group</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
