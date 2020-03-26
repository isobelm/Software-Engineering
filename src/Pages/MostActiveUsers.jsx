import React, { Component } from 'react'
import GraphPage from './GraphPage'
import SimpleBarGraph from '../Components/SimpleBarGraph'
import { getRecentActiveUsers } from '../Backend/APIWrapper'

export const MostActiveUsersGraphSettings = {
  getData: async function() {
    let [data, newTimestamp] = await getRecentActiveUsers(
      new Date().toISOString()
    )
    data = data.slice(0, 50)
    this.setState({
      fullData: data,
      prevTimestamp: newTimestamp,
    })
    return data
  },
  refreshTime: 2000,
  refreshMethod: async function() {
    let [data, newTimestamp] = await getRecentActiveUsers(
      this.state.prevTimestamp
    )
    this.setState({ prevTimestamp: newTimestamp })
    data = data.slice(0, 50)
    if (this.state.fullData) {
      let fullData = this.state.fullData
      data.forEach(userAdditions => {
        let index = -1
        for (let i = 0; i < fullData.length; i += 1) {
          if (fullData[i].username === userAdditions.username) {
            index = i
          }
        }
        if (index !== -1) {
          fullData[index].actions += userAdditions.actions
        } else {
          fullData.push(userAdditions)
        }
      })
      fullData.sort((a, b) => b.actions - a.actions)
      fullData.slice(0, 50)
      let smlData = fullData.slice(0, this.state.fullGraph ? 30 : 10)
      smlData.forEach(user => {
        if (user.groups !== undefined && user.groups.includes('bot')) {
          user.bot = user.actions
          user.human = 0
        } else {
          user.bot = 0
          user.human = user.actions
        }
      })

      this.setState({ fullData: fullData, data: smlData })
    } else {
      let smlData = data.slice(0, this.state.fullGraph ? 30 : 10)

      this.setState({ data: smlData })
    }
  },
  keys: ['bot', 'human'],
  index: 'username',
  xAxis: 'username',
  yAxis: 'actions',
  colors: 'set2',
  colorBy: 'id',
  legend: {
    dataFrom: 'keys',
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: 'left-to-right',
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [
      {
        on: 'hover',
        style: {
          itemOpacity: 1,
        },
      },
    ],
  },
  margin: { top: 5, right: 130, bottom: 50, left: 80 },
  onClick: function(click) {
    window.open(
      'https://www.wikidata.org/wiki/User:' + click.indexValue,
      '_blank'
    )
  },
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
    let paused = this.state.paused
    this.setState({ paused: !paused })
  }

  render() {
    return (
      <GraphPage
        handlePause={this.handlePause}
        paused={this.state.paused}
        explanation={
          'A live view of the users active right now.' +
          " Hover over a bar to get a preview of the user's page, or click to open the user's page in a new tab."
        }
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
