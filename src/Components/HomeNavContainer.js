import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


//This class takes in a title and a description and displays them as shown on the homepage


class HomeNavContainer extends Component {
	render() {
		return (
			<div className="ting">
			
				<h2 className={this.props.style}>{ this.props.btnTitle1 }</h2>
				<h2 className={this.props.style}>{ this.props.btnTitle2 }</h2>
				<br/>	
				<Link to={ this.props.btnLink }>
					 <button type="button" className={this.props.btnStyle}>{ this.props.btnText }</button>
				</Link>
			</div>
		);
	}
}

export default HomeNavContainer;
