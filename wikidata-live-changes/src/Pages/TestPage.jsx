import React, { Component } from "react";

class TestPage extends Component {
	constructor(props) {
		super(props);

		this.state = { history: this.props.history };
	}

	render() {
		return (
			<div className="HomePage">
				<p>Test Page</p>
			</div>
		);
	}
}

export default TestPage;
