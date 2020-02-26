import React, { Component } from 'react'
import { ResponsiveBar } from '@nivo/bar'

class SimpleBarGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      data: null,
      fullGraph: this.props.fullGraph,
    }

    this.init()
  }

  loadData = data => {
    let smlData = data.splice(1, this.state.fullGraph ? 30 : 10)
    this.setState({
      loaded: true,
      data: smlData,
    })
  }

  init = async () => {
    let data = await this.props.settings.getData()
    this.loadData(data)
  }

  render() {
    let margin = {}
    let label = null
    let classname = ''
    if (this.state.fullGraph) {
      margin = { top: 5, right: 30, bottom: 80, left: 80 }
      label = true
      classname = 'full-graph-container'
    } else {
      margin = { top: 0, right: 0, bottom: 0, left: 0 }
      label = false
      classname = 'Graph-Container-Card'
    }
    return (
      <div>
        <p>
          {!this.state.loaded ? (
            'loading...'
          ) : (
            <div className={classname}>
              <ResponsiveBar
                data={this.state.data}
                keys={this.props.settings.keys}
                indexBy={this.props.settings.index}
                margin={margin}
                padding={0.3}
                colors={{ scheme: this.props.settings.colors }}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 30,
                  legend: this.props.settings.xAxis,
                  legendPosition: 'bottom',
                  legendOffset: 40,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: this.props.settings.yAxis,
                  legendPosition: 'middle',
                  legendOffset: -60,
                }}
                enableLabel={label}
                animate={!label}
                isInteractive={label}
                motionStiffness={90}
                motionDamping={15}
              />
            </div>
          )}
        </p>
      </div>
    )
  }
}

export default SimpleBarGraph
