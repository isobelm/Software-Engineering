import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import SampleGraph from './SampleGraph'

class GraphCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			history: this.props.history,
			title: this.props.title,
			pageLink: this.props.pageLink,
		}
	}

	render() {
		return (
			<Card onClick={this.onClick} tag="a">
				<Card.Body>
					<Card.Title>{this.state.title}</Card.Title>
					<div className="Graph-Container-Card">
						<SampleGraph />
					</div>
				</Card.Body>
			</Card>
		)
	}

	onClick = () => {
		this.state.history.push(this.state.pageLink)
	}
}

export default GraphCard
