import React, { Component } from 'react'
import GraphPage from './GraphPage'
import UsersByMostEdits from '../Components/UsersByMostEditsGraph'

class Commits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: this.props.history,
      data: undefined,
      dataRecieved: false,
      width: 0,
      height: 0,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  render() {
    return (
      <GraphPage
        graph={<UsersByMostEdits fullGraph={true} />}
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

export default Commits
