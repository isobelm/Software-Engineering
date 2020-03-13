import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeNavContainer extends Component {
	render() {
		return (
			<div className="col-md-5">
				<div className="row">
					<div className="col-md-4 inline">
						<p className="font-weight-bold">Open the feed of the Wikidata API</p>
						<Link to="/feed">
							 <button type="button" className="align-bottom btn btn-outline-primary">Wikidata</button>
						</Link>
					</div>

					<div className="col-md-4 inline">
						<p className="font-weight-bold">Graphically analyise the Wikidata API</p>
						<Link to="/page">
							 <button type="button" className="align-bottom btn btn-outline-primary">Graphs</button>
						</Link>
					</div>

					<div className="col-md-4 inline">
						<p className="font-weight-bold"><br />User Data</p>
						<Link to="/">
							 <button type="button" className="align-bottom btn btn-outline-primary">Users</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeNavContainer;
