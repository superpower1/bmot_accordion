import React from 'react';
import { 
	Button,
	Col,
	Thumbnail
	} from 'react-bootstrap';

class EventItem extends React.Component {
	render() {
		return (
	      <Col xs={6} md={4}>
	        <Thumbnail src="http://placehold.it/300x150" alt="300x150">
	          <h3>Thumbnail label</h3>
	          <p>Description</p>
	          <p>
	            <Button bsStyle="primary">Button</Button>&nbsp;
	            <Button bsStyle="default">Button</Button>
	          </p>
	        </Thumbnail>
	      </Col>
		)	
	}
}

export default EventItem;

		