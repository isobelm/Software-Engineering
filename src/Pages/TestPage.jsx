import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import GraphCard from '../Components/GraphCard'
import FeedData from '../Components/FeedData'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
import SimpleBarGraph from '../Components/SimpleBarGraph'
import PieChart from '../Components/PieChart'
import { MostActiveUsersGraphSettings } from './MostActiveUsers'
import { MostActivePagesGraphSettings } from './MostActivePages'
import { UsersByMostEditsGraphSettings } from './UsersByMostEditsPage'
import { RecentEditSizeSettings } from './RecentEditSize'

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
              <FeedData />
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
                      paused={true}
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
                      paused={false}
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
                      paused={false}
                      fullGraph={false}
                      settings={MostActivePagesGraphSettings}
                    />
                  }
                />
                <GraphCard
                  title="Largest Recent Edits"
                  pageLink="recent-edit-size"
                  history={this.state.history}
                  graph={
                    <PieChart
                      paused={true}
                      fullGraph={false}
                      settings={RecentEditSizeSettings}
                    />
                  }
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
