import React from 'react';
import EventItem from './EventItem';
import './eventfulApi';
import { 
	Grid,
	Row
	} from 'react-bootstrap';

class Event extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: null
		}
	}

	componentDidMount() {

		// fetch(`http://api.eventful.com/js/api`)
		// 		.then(response => {
		// 			response.json().then(result => {
		// 				// handle result
		// 				let data = result.data;
		// 				console.log(data);
		// 				this.setState({
		// 					data
		// 				});
		// 			})
		// 		})
		// 		.catch(e => {
		// 			// handle error
		// 		})

		let oArgs = {

	      app_key: "5CVV9Lr5t3H2MFnj",

	      // q: "music",

	      where: "Melbourne", 

	      "date": "Future",

	      page_size: 6,

	      sort_order: "popularity",

	    };

	    EVDB.API.call("/events/search", oArgs, function(oData) {

	      // Note: this relies on the custom toString() methods below
	      console.log(oData);
	      let data = oData;
	      this.setState({data});
	    });		

	}

	render() {
		return (
			<Grid>
			    <Row>
			      <EventItem></EventItem>
			    </Row>
			</Grid>
		);
	}
}

export default Event;

		