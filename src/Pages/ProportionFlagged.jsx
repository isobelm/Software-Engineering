import React, { Component } from 'react'
import GraphPage from './GraphPage'
import PieChart from '../Components/PieChart'
import { getRecentEditsWithFlags } from '../Backend/APIWrapper'

export const ProportionFlaggedSettings = {
  getData: getRecentEditsWithFlags,
  refreshTime: 2000,
  refreshMethod: getRecentEditsWithFlags,
  colorFunction: d => d.color,
  name: 'Proportion Of Edits Flagged',
}

class ProportionFlagged extends Component {
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
          'The proportion of the last 50 edits that was flagged as potentially damaging.'
        }
        graph={
          <PieChart
            fullGraph={true}
            settings={ProportionFlaggedSettings}
            paused={this.state.paused}
          />
        }
        name={ProportionFlaggedSettings.name}
      />
    )
  }
}
export default ProportionFlagged
