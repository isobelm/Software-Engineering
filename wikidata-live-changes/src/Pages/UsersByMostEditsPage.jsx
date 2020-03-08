import React, { Component } from 'react'
import GraphPage from './GraphPage'
import SimpleBarGraph from '../Components/SimpleBarGraph'
import { getMostEditsUsers } from '../Backend/APIWrapper'

export const UsersByMostEditsGraphSettings = {
  getData: async function() {
    let data = await getMostEditsUsers()
    return data
  },
  refreshTime: 2000,
  refreshMethod: function() {
    this.loadData()
  },
  keys: ['editcount'],
  index: 'name',
  xAxis: 'users',
  yAxis: 'edit count',
  colors: 'paired',
  tooltip: function(click) {
    return this.tooltip(click, 'https://www.wikidata.org/wiki/User:')
  },
}

class UsersByMostEditsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: this.props.history,
    }
  }

  render() {
    return (
      <GraphPage
        graph={
          <SimpleBarGraph
            fullGraph={true}
            settings={UsersByMostEditsGraphSettings}
          />
        }
        name={'Users By Most Edits'}
      />
    )
  }
}
export default UsersByMostEditsPage
