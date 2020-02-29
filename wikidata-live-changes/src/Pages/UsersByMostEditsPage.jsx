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
}

class UsersByMostEditsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: this.props.history,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
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
