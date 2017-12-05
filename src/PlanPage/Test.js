import React from "react";
import './main.min.css';
import {
  Nav,
  NavItem
} from "react-bootstrap";

class Test extends React.Component {
  render() {
    return (
      <div className="container example-three">

        <Nav bsStyle="pills" bsClass="vertical-align-middle scroll">
          <NavItem eventKey="first" bsClass="nav-item">
            Tab 1
          </NavItem>
          <NavItem eventKey="second" bsClass="nav-item">
            Tab 2
          </NavItem>
          <NavItem eventKey="third" bsClass="nav-item">
            Tab 2
          </NavItem>
          <NavItem eventKey="forth" bsClass="nav-item">
            Tab 2
          </NavItem>
          <NavItem eventKey="fifth" bsClass="nav-item">
            Tab 2
          </NavItem>
          <NavItem eventKey="sixth" bsClass="nav-item">
            Tab 2
          </NavItem>
          <NavItem eventKey="seventh" bsClass="nav-item">
            Tab 2
          </NavItem>
        </Nav>

        <nav className="vertical-align-middle scroll">
          <span className="nav-item">Blog</span>
          <span className="nav-item">Portfolio</span>
          <span className="nav-item">Downloads</span>
          <span className="nav-item">About</span>
          <span className="nav-item">Contact</span>
        </nav>
      </div>
    );
  }
}

export default Test;
