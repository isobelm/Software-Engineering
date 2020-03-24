import React, { Component } from 'react'
import GraphPage from './GraphPage'
import SimpleBarGraph from '../Components/SimpleBarGraph'
import { getMostActiveUsers } from '../Backend/APIWrapper'

export const MostActiveUsersGraphSettings = {
  getData: async function() {
    let data = await getMostActiveUsers()
    return data
  },
  refreshTime: 20000,
  refreshMethod: function() {
    this.loadData()
  },
  keys: ['recentactions'],
  index: 'name',
  xAxis: 'users',
  yAxis: 'recent actions',
  colors: 'set3',
  tooltip: function(click) {
    return this.tooltip(click, 'https://www.wikidata.org/wiki/User:')
  },
}

class MostActiveUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: this.props.history,
      paused: false,
    }
  }

  handlePause = event => {
    this.setState({ paused: event.target.value })
  }

  render() {
    return (
      <GraphPage
        handlePause={this.handlePause}
        paused={this.state.paused}
        graph={
          <SimpleBarGraph
            fullGraph={true}
            settings={MostActiveUsersGraphSettings}
            paused={this.state.paused}
          />
        }
        name={'Most Active Users'}
      />
    )
  }
}

export default MostActiveUsers
