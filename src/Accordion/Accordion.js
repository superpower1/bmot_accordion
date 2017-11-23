import React from 'react';
import './index.css';
// import './bootstrap.min.css';
import classNames from 'classnames';

class Loading extends React.Component {
	render() {
		return (
			<div>
			Accordion is Loading...
			</div>
		);
	}
}


class Accordion extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			isOpenUp: {
				about: false,
				when: false,
				where: false,
				how: false,
				around: false,
				activ: false,
				stay: false,
				cost: false,
				tips: false
			}
		}
		
	}

	componentDidMount() {

		fetch(`http://35.160.199.90:12000/plans/584a1f0ca6f083ecb1173ded`)
				.then(response => {
					response.json().then(result => {
						// handle result
						let data = result.data;
						console.log(data);
						this.setState({
							data
						});
					})
				})
				.catch(e => {
					// handle error

				})		

	}

	openSection = (e) => {
		let openSectId = e.target.id;
		let isOpenUp = this.state.isOpenUp;

		isOpenUp[openSectId] = !this.state.isOpenUp[openSectId];

		this.setState({
			isOpenUp
		});
	}

	render() {
		// if (!this.state.data) {
		// 	return <Loading></Loading>
		// }
		// else {
			// let ab = this.state.data.about;

			/* about section classNames
			*/
			let aboutBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.about
			});
			let aboutContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.about
			});
			let aboutChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.about
			});

			/* when section classNames
			*/
			let whenBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.when
			});
			let whenContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.when
			});
			let whenChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.when
			});

			/* where section classNames
			*/
			let whereBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.where
			});
			let whereContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.where
			});
			let whereChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.where
			});

			/* how section classNames
			*/
			let howBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.how
			});
			let howContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.how
			});
			let howChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.how
			});

			/* around section classNames
			*/
			let aroundBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.around
			});
			let aroundContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.around
			});
			let aroundChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.around
			});

			/* activ section classNames
			*/
			let activBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.activ
			});
			let activContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.activ
			});
			let activChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.activ
			});

			/* stay section classNames
			*/
			let stayBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.stay
			});
			let stayContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.stay
			});
			let stayChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.stay
			});

			/* cost section classNames
			*/
			let costBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.cost
			});
			let costContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.cost
			});
			let costChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.cost
			});

			/* tips section classNames
			*/
			let tipsBtnClass = classNames({
			  'accordion-section-title': true,
			  'active': this.state.isOpenUp.tips
			});
			let tipsContentClass = classNames({
			  'accordion-section-content': true,
			  'show': this.state.isOpenUp.tips
			});
			let tipsChevronClass = classNames({
			  'icon-chevron-down': true,
			  'active': this.state.isOpenUp.tips
			});

			return (
				<div className="accordion">


					<div className="accordion-section">
						<button className={aboutBtnClass} id="about" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">ABOUT<span className={aboutChevronClass}></span></button>
						<div className="collapse" id="collapse1">
							<div className={aboutContentClass}>
							
				                    
				                <div className="touristoptions">  
			                        <div> 
		                        {/*         
		                        <img className="img-responsive" id="tourismimage" src={ab.tourism_office.tourism_office_image_link} alt="" />
                                <div>
                   					<a className="btn btn-primary" id="toptionslink1" href={ab.tourism_office.tourism_office_website_link}>LINK HERE</a>
                                </div> 
			                    */}        
			                        </div>
				                </div>
							</div>
						</div>
					</div>


					<div className="accordion-section">
						<button className={whenBtnClass} id="when" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">WHEN TO GO<span className={whenChevronClass}></span></button>
						<div id="collapse2" className="collapse">
							<div className={whenContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


					<div className="accordion-section">
						<button className={whereBtnClass} id="where" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">WHERE TO GO<span className={whereChevronClass}></span></button>
						<div id="collapse3" className="collapse">
							<div className={whereContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


					<div className="accordion-section">
						<button className={howBtnClass} id="how" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">GETTING THERE<span className={howChevronClass}></span></button>
						<div id="collapse4" className="collapse">
							<div className={howContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


					<div className="accordion-section">
						<button className={aroundBtnClass} id="around" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">GETTING AROUND<span className={aroundChevronClass}></span></button>
						<div id="collapse5" className="collapse">
							<div className={aroundContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


					<div className="accordion-section">
						<button className={activBtnClass} id="activ" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">SEE AND DO<span className={activChevronClass}></span></button>
						<div id="collapse6" className="collapse">
							<div className={activContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


					<div className="accordion-section">
						<button className={stayBtnClass} id="stay" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">WHERE TO STAY<span className={stayChevronClass}></span></button>
						<div id="collapse7" className="collapse">
							<div className={stayContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


					<div className="accordion-section">
						<button className={costBtnClass} id="cost" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">BUDGET AND COSTS<span className={costChevronClass}></span></button>
						<div id="collapse8" className="collapse">
							<div className={costContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


					<div className="accordion-section">
						<button className={tipsBtnClass} id="tips" onClick={this.openSection} type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">TRAVEL TIPS<span className={tipsChevronClass}></span></button>
						<div id="collapse9" className="collapse">
							<div className={tipsContentClass}>
								<div>test</div>
								<div>test</div>
			        		</div>
		        		</div>
					</div>


				</div>
			);
		// }
		
	}
}

export default Accordion;

		