import React, { Component } from 'react'
import GraphPage from './GraphPage'
import PieChart from '../Components/PieChart'
import { getRecentEditsWithFlags } from '../Backend/APIWrapper'

export const ProportionFlaggedSettings = {
  getData: getRecentEditsWithFlags,
  refreshTime: 1000,
  refreshMethod: getRecentEditsWithFlags,
  colorBy: 'type',
  colors: 'pastel1',
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
          <div>
            {'The largest of the last 500 edits. The number in each of the sections represents the size of the edit in bytes.' +
              ' Hover over a section to get a preview of the page, or click to open the page in a new tab.'}
            <p>
              <img
                className="legend"
                src={require('../legend.svg')}
                alt="Legend"
              />
            </p>
          </div>
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
