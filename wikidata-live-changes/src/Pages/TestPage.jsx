import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import GraphCard from '../Components/GraphCard'
import CardDeck from 'react-bootstrap/CardDeck'
import SampleGraph from '../Components/SampleGraph'
import SimpleBarGraph from '../Components/SimpleBarGraph'
import { MostActiveUsersGraphSettings } from './MostActiveUsers'
import { MostActivePagesGraphSettings } from './MostActivePages'
import { UsersByMostEditsGraphSettings } from './UsersByMostEditsPage'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history: this.props.history,
    }
  }

  render() {
    return (
      <div className="HomePage">
        <Navbar />
        <div className="deck-container">
          <CardDeck className="deck">
            <GraphCard
              title="Users by most edits"
              pageLink="users-by-most-edits"
              history={this.state.history}
              graph={
                <SimpleBarGraph
                  fullGraph={false}
                  settings={UsersByMostEditsGraphSettings}
                />
              }
            />
            <GraphCard
              title="Most Active Users"
              pageLink="most-active-users"
              history={this.state.history}
              graph={
                <SimpleBarGraph
                  fullGraph={false}
                  settings={MostActiveUsersGraphSettings}
                />
              }
            />
            <GraphCard
              title="Most Active Pages"
              pageLink=""
              history={this.state.history}
              graph={
                <SimpleBarGraph
                  fullGraph={false}
                  settings={MostActivePagesGraphSettings}
                />
              }
            />
          </CardDeck>
          <CardDeck className="deck">
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
              graph={<SampleGraph />}
            />
            <GraphCard
              title="Sample Graph: link to feed"
              pageLink="feed"
              history={this.state.history}
              graph={<SampleGraph />}
            />
            <GraphCard
              title="Sample Graph: link to home"
              pageLink=""
              history={this.state.history}
              graph={<SampleGraph />}
            />
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default HomePage
