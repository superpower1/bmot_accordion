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

  // handleSelect(key) {
  //   // alert(`selected ${key}`);
  //   console.log(this.state); //null
  //   this.setState({ key });
  // }

  // handleSelect = (key) => {
  //   // alert(`selected ${key}`);
  //   console.log(this.state); // {name: "first"}
  //   this.setState({ key });
  // }

  render() {

    const tabsInstance = (
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">     
        <div className="">
          <Nav bsStyle="tabs">
            <NavItem eventKey="1">
              About
            </NavItem>
            <NavItem eventKey="2">
              When to go
            </NavItem>
            <NavItem eventKey="3">
              Where to go
            </NavItem>
            <NavItem eventKey="4">
              How to Get There
            </NavItem>
            <NavItem eventKey="5">
              How to Get Around
            </NavItem>
            <NavItem eventKey="6">
              What to See and Do
            </NavItem>
            <NavItem eventKey="7">
              Where to Stay
            </NavItem>
            <NavItem eventKey="8">
              Budget and Cost
            </NavItem>
            <NavItem eventKey="9">
              Important Travel Tips
            </NavItem>
          </Nav>
        
         
          <Tab.Content animation>
            <Tab.Pane eventKey="1">
              <p>When to go to Australia
                
                Australia has two different seasons.
                
                The North (Top of Western Australia, Northern Territory, Queensland) is warm most of the year.  November to April is the Wet season in most of the region with hot, humid weather and tropical storms. June – August is Dry and Warm. Peak season in the North is from mid year generally June – August when the weather is dry and warm and lots of tourist are around. The best months to visit the North are April, May, Early September, October for good weather and reasonable prices.
                
                The South (Sydney, Melbourne, Tasmania, South Australia, Southern Western Australia) is warm in Summer December – February, with cool to cold Winters June – August.  For the south Peak Season is from December – March when it is warm/hot and dry and holiday season.  The best months to visit the south are November, Early December and March, April for good weather and reasonable prices.
                
                To decide when to go, it’s a good idea to check Australia weather, Australia public holidays and Australia School Holidays.
                When to go to Australia
                
                Australia has two different seasons.
                
                The North (Top of Western Australia, Northern Territory, Queensland) is warm most of the year.  November to April is the Wet season in most of the region with hot, humid weather and tropical storms. June – August is Dry and Warm. Peak season in the North is from mid year generally June – August when the weather is dry and warm and lots of tourist are around. The best months to visit the North are April, May, Early September, October for good weather and reasonable prices.
                
                The South (Sydney, Melbourne, Tasmania, South Australia, Southern Western Australia) is warm in Summer December – February, with cool to cold Winters June – August.  For the south Peak Season is from December – March when it is warm/hot and dry and holiday season.  The best months to visit the south are November, Early December and March, April for good weather and reasonable prices.
                
                To decide when to go, it’s a good idea to check Australia weather, Australia public holidays and Australia School Holidays.
                When to go to Australia
                
                Australia has two different seasons.
                
                The North (Top of Western Australia, Northern Territory, Queensland) is warm most of the year.  November to April is the Wet season in most of the region with hot, humid weather and tropical storms. June – August is Dry and Warm. Peak season in the North is from mid year generally June – August when the weather is dry and warm and lots of tourist are around. The best months to visit the North are April, May, Early September, October for good weather and reasonable prices.
                
                The South (Sydney, Melbourne, Tasmania, South Australia, Southern Western Australia) is warm in Summer December – February, with cool to cold Winters June – August.  For the south Peak Season is from December – March when it is warm/hot and dry and holiday season.  The best months to visit the south are November, Early December and March, April for good weather and reasonable prices.
                
                To decide when to go, it’s a good idea to check Australia weather, Australia public holidays and Australia School Holidays.
                When to go to Australia
                
                Australia has two different seasons.
                
                The North (Top of Western Australia, Northern Territory, Queensland) is warm most of the year.  November to April is the Wet season in most of the region with hot, humid weather and tropical storms. June – August is Dry and Warm. Peak season in the North is from mid year generally June – August when the weather is dry and warm and lots of tourist are around. The best months to visit the North are April, May, Early September, October for good weather and reasonable prices.
                
                The South (Sydney, Melbourne, Tasmania, South Australia, Southern Western Australia) is warm in Summer December – February, with cool to cold Winters June – August.  For the south Peak Season is from December – March when it is warm/hot and dry and holiday season.  The best months to visit the south are November, Early December and March, April for good weather and reasonable prices.
                
                To decide when to go, it’s a good idea to check Australia weather, Australia public holidays and Australia School Holidays.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              Tab 2 content
            </Tab.Pane>
          </Tab.Content>
         
        </div> 
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
