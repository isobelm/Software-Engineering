import { ResponsiveLine } from '@nivo/line'
import React, { Component } from 'react'

class LineGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      data: null,
      fullGraph: this.props.fullGraph,
    }

    this.loadData()
  }

  tooltip = function(click, url) {
    return (
      <div className="iframe-container">
        <iframe
          src={url + click.indexValue}
          className="iframe"
          title="tooltip-option-2"
        />
      </div>
    )
  }

  loadData = async () => {
    let getData = this.props.settings.getData.bind(this)
    let data = await getData()
    let smlData = data.slice(0, this.state.fullGraph ? 30 : 10)
    this.setState({
      loaded: true,
      data: smlData,
    })
  }

  componentDidMount() {
    this.refreshInterval = setInterval(async () => {
      let method = this.props.settings.refreshMethod.bind(this)
      await method()
    }, this.props.settings.refreshTime)
  }

  render = () => {
    let margin = {}
    let classname = ''
    if (this.state.fullGraph) {
      margin = { top: 5, right: 60, bottom: 80, left: 80 }
      classname = 'full-graph-container'
      if (this.props.settings.onClick) {
      }
    } else {
      margin = { top: 0, right: 0, bottom: 0, left: 0 }
      classname = 'Graph-Container-Card'
    }
    debugger
    return (
      <div className={classname}>
        {this.state.loaded === false ? (
          'Loading...'
        ) : (
          <ResponsiveLine
            data={this.state.data}
            margin={margin}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 30,
              legend: this.props.settings.xAxis,
              legendOffset: 56,
              legendPosition: 'middle',
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: this.props.settings.yAxis,
              legendOffset: -60,
              legendPosition: 'middle',
            }}
            enableArea={true}
            areaOpacity={1}
            colors={{ scheme: 'pastel1' }}
            enablePoints={false}
            enableGridX={false}
            xFormat={this.props.settings.xFormat}
          />
        )}
      </div>
    )
  }
}

export default LineGraph
