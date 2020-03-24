import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeNavContainer extends Component {
	render() {
		return (
			<div className="col-md-2">
				<h1>{ this.props.btnImage }</h1>
				<p className="font-weight-bold">{ this.props.btnTitle }</p>
				<Link to={ this.props.btnLink }>
					 <button type="button" className="align-bottom btn btn-outline-primary">{ this.props.btnText }</button>
				</Link>
			</div>
		);
	}
}

export default HomeNavContainer;
