import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeNavContainer extends Component {
	constructor(props) {
		super(props);
		this.state = props
	}

	render() {
		return (
			<div class="col-md-5">
				<div class="row">
					<div class="col-md-4 inline">
						<p class="font-weight-bold">Open the feed of the Wikidata API</p>
						<Link to="/feed">
							 <button type="button" class="align-bottom btn btn-outline-primary">Wikidata</button>
						</Link>
					</div>

					<div class="col-md-4 inline">
					<p class="font-weight-bold">Graphically analyise the Wikidata API</p>
					<Link to="/page">
						 <button type="button" class="align-bottom btn btn-outline-primary">Graphs</button>
					</Link>
					</div>

					<div class="col-md-4 inline">
					<p class="font-weight-bold"><br />User Data</p>
					<Link to="/">
						 <button type="button" class="align-bottom btn btn-outline-primary">Users</button>
					</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeNavContainer;
