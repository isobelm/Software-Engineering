import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import GraphCard from '../Components/GraphCard'
import CardDeck from 'react-bootstrap/CardDeck'
import SampleGraph from '../Components/SampleGraph'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history, sampleGraph: new SampleGraph() }
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
              graph={this.state.sampleGraph}
            />
            <GraphCard
              title="Sample Graph: link to feed"
              pageLink="feed"
              history={this.state.history}
              graph={this.state.sampleGraph}
            />
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
              graph={this.state.sampleGraph}
            />
          </CardDeck>
          <CardDeck className="deck">
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
              graph={this.state.sampleGraph}
            />
            <GraphCard
              title="Sample Graph: link to feed"
              pageLink="feed"
              history={this.state.history}
              graph={this.state.sampleGraph}
            />
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
              graph={this.state.sampleGraph}
            />
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default HomePage
