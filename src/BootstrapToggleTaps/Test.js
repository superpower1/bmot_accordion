import {
  Tabs,
  Tab,
  Row,
  Col,
  Nav,
  NavItem
} from "react-bootstrap";
import React from "react";
import './main.css';

class Section extends React.Component {
  render() {
    return (
        <button>
          {this.props.name}
        </button>
    );
  }
}

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "first"
    }
  }

  getInitialState() {
    return {
      key: 1,
    };
  }

  handleSelect(key) {
    // alert(`selected ${key}`);
    this.setState({ key });
  }
  
  render() {
    const tabsInstance = (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={4}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first">
                Tab 1
              </NavItem>
              <NavItem eventKey="second">
                Tab 2
              </NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                Tab 1 content
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Tab 2 content
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );

    const defaultTabs = (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    );

    return tabsInstance;
  }
}

export default Test;
