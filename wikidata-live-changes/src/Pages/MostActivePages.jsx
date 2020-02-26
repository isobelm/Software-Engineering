import React, { Component } from 'react'
import GraphPage from './GraphPage'
import SimpleBarGraph from '../Components/SimpleBarGraph'
import { getMostActivePages } from '../Backend/APIWrapper'

export const MostActivePagesGraphSettings = {
  getData: getMostActivePages,
  keys: ['actions'],
  index: 'id',
  xAxis: 'pages',
  yAxis: 'actions',
  colors: 'pastel1',
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
            settings={MostActivePagesGraphSettings}
          />
        }
        name={'Users By Most Edits'}
      />
    )
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
}
export default UsersByMostEditsPage
