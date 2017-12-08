import React from "react";
import './main.min.css';
import {
  Nav,
  NavItem,
  Tab,
} from "react-bootstrap";

class Test extends React.Component {
  render() {
    return (

        <div className="container example-three">
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
