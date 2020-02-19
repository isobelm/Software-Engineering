import React, { Component } from 'react'
import GraphCard from '../Components/GraphCard'

class HomePage extends Component {
	constructor(props) {
		super(props)

		this.state = { history: this.props.history }
	}

	render() {
		return (
			<div className="HomePage">
				<p>Wikidata Live Changes</p>
			</div>
		)
	}
}

export default HomePage
