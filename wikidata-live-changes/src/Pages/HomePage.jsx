import React, { Component } from 'react'
import GraphCard from '../Components/GraphCard'
import TitleContainer from '../Components/TitleContainer'
import CardDeck from 'react-bootstrap/CardDeck'

import 'bootstrap/dist/css/bootstrap.min.css'

class HomePage extends Component {
	constructor(props) {
		super(props)

		this.state = { history: this.props.history }
	}

	render() {
		return (
			<div className="HomePage">
				<TitleContainer
					title="Wikidata Live"
					subtitle="A web app to visualise recent changes to Wikidata in quasi real time."
				></TitleContainer>
				<CardDeck>
					<GraphCard
						title="Card"
						history={this.state.history}
						pageLink="page"
					/>
					<GraphCard
						title="Card"
						history={this.state.history}
						pageLink="page"
					/>
				</CardDeck>
			</div>
		)
	}
}

export default HomePage
