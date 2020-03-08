import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import GraphCard from '../Components/GraphCard'
import TestFeedData from '../Examples/TestFeedData'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
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
        <div class="row justify-content-left text-dark">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div class="feedContainer">
              <TestFeedData></TestFeedData>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
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
              </CardDeck>
              <CardDeck className="deck">
                <GraphCard
                  title="Most Active Pages"
                  pageLink="most-active-pages"
                  history={this.state.history}
                  graph={
                    <SimpleBarGraph
                      fullGraph={false}
                      settings={MostActivePagesGraphSettings}
                    />
                  }
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
        </div>
      </div>
    )
  }
}

export default HomePage
