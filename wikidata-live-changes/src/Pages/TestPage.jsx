import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import GraphCard from '../Components/GraphCard'
import CardDeck from 'react-bootstrap/CardDeck'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="HomePage">
        <Navbar />
        <div className="deck-container">
          <CardDeck className="deck">
            <GraphCard
              title="Sample Graph: link to feed"
              pageLink="feed"
              history={this.state.history}
            />
            <GraphCard
              title="Sample Graph: link to feed"
              pageLink="feed"
              history={this.state.history}
            />
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
            />
          </CardDeck>
          <CardDeck className="deck">
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
            />
            <GraphCard
              title="Sample Graph: link to feed"
              pageLink="feed"
              history={this.state.history}
            />
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
            />
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default HomePage
