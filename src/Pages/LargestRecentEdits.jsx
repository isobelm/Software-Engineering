import React, { Component } from 'react'
import GraphPage from './GraphPage'
import PieChart from '../Components/PieChart'
import { getRecentLargestEdits } from '../Backend/APIWrapper'

export const LargestRecentEditsSettings = {
  getData: getRecentLargestEdits,
  refreshTime: 2000,
  refreshMethod: getRecentLargestEdits,
  colorBy: 'type',
  colors: 'set2',
  onClick: function(click) {
    window.open('https://www.wikidata.org/wiki/' + click.label, '_blank')
  },
  tooltip: function(click) {
    return this.tooltip(click, 'https://www.wikidata.org/wiki/')
  },
}

class LargestRecentEdits extends Component {
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
            settings={LargestRecentEditsSettings}
            paused={this.state.paused}
          />
        }
        name={'Largest Recent Edits'}
      />
    )
  }
}
export default LargestRecentEdits
