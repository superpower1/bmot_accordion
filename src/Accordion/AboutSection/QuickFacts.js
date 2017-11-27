import React from 'react';
import './QuickFacts.css';

class QuickFacts extends React.Component {
	render() {
		return (
			<section>
				<div className="grid-container">
					<figure>Capital City<strong>Tokyo</strong></figure>
					<figure>Population<strong>127 Million</strong></figure>
					<figure>Language<strong>Japanese</strong></figure>

					<figure>Currency<strong>Japanese Yen</strong></figure>	
					<figure>Most popular areas<strong>Tokyo</strong>Osaka, Kyoto, Hiroshima</figure>
					<figure>Average Cost<strong>$2,700</strong></figure>
					
					<figure>Best Time to visit<strong>Late spring (March to May) </strong>and late autumn (September to November)</figure>
				</div>
			</section>
		);
	}
}

export default QuickFacts;

		