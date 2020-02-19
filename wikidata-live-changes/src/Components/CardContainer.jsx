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
		return <div className="Card-Container" />
	}

	onClick = () => {
		this.state.history.push(this.state.pageLink)
	}
}

export default GraphCard
