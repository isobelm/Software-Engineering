import React, { Component } from "react";

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = { history: this.props.history };
	}

	render() {
		return (
			<div className="HomePage">
				<p>Wikidata Live Changes</p>
				<button onClick={this.route}>click me</button>
			</div>
		);
	}

	route = () => {
		this.state.history.push("page");
	};
}

export default HomePage;
