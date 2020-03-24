import React, { Component } from 'react'
import GraphPage from './GraphPage'
import SimpleBarGraph from '../Components/SimpleBarGraph'
import { getMostActivePages } from '../Backend/APIWrapper'

export const MostActivePagesGraphSettings = {
  getData: async function() {
    let [data, newTimestamp] = await getMostActivePages(
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
    let [data, newTimestamp] = await getMostActivePages(
      this.state.prevTimestamp
    )
    this.setState({ prevTimestamp: newTimestamp })
    data = data.slice(0, 50)
    if (this.state.fullData) {
      let fullData = this.state.fullData
      data.forEach(pageAdditions => {
        let index = -1
        for (let i = 0; i < fullData.length; i += 1) {
          if (fullData[i].id === pageAdditions.id) {
            index = i
          }
        }
        if (index !== -1) {
          fullData[index].actions += pageAdditions.actions
        } else {
          fullData.push(pageAdditions)
        }
      })
      fullData.sort((a, b) => b.actions - a.actions)
      fullData.slice(0, 50)
      let smlData = fullData.slice(0, this.state.fullGraph ? 30 : 10)

      this.setState({ fullData: fullData, data: smlData })
    } else {
      let smlData = data.slice(0, this.state.fullGraph ? 30 : 10)

      this.setState({ data: smlData })
    }
  },
  keys: ['actions'],
  index: 'id',
  xAxis: 'pages',
  yAxis: 'actions',
  colors: 'pastel1',
  onClick: function(click) {
    window.open('https://www.wikidata.org/wiki/' + click.indexValue, '_blank')
  },
  tooltip: function(click) {
    return this.tooltip(click, 'https://www.wikidata.org/wiki/')
  },
}

class MostActivePages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: this.props.history,
      paused: true,
    }
  }

  handlePause = event => {
    let paused = this.state.paused
    this.setState({ paused: !paused })
  }

  render() {
    console.log('upper pause:' + this.state.paused)
    let paused = this.state.paused
    return (
      <GraphPage
        handlePause={this.handlePause}
        paused={paused}
        explanation={
          'A live view of the pages being edited right now.' +
          'Hover over a bar to get a preview of the page, or click to open the page in a new tab.'
        }
        graph={
          <SimpleBarGraph
            fullGraph={true}
            settings={MostActivePagesGraphSettings}
            paused={paused}
          />
        }
        name={'Most Active Pages'}
      />
    )
  }
}
export default MostActivePages
