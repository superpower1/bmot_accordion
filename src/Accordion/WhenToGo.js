	
class WhenToGo extends React.Component {

	openSection = (e) => {
		console.log(e);
	}

	render() {
		return (
			<div className="accordion-section">
				<button className="accordion-section-title"  id="whenblock" onClick={this.openSection}>WHEN TO GO</button>
				<div id="accordion-2" className="accordion-section-content">
					<div>test</div>
					<div>test</div>
        		</div>
			</div>
		);
	}
}

export default WhenToGo;

		