import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import SampleGraph from './SampleGraph'

class GraphCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: this.props.history,
      title: this.props.title,
      pageLink: this.props.pageLink,
    }
  }

  render() {
    return (
      <Card onClick={this.onClick} tag="a" className="graph-card">
        <Card.Body>
          <Card.Title className="card-title">{this.state.title}</Card.Title>
          <SampleGraph />
        </Card.Body>
      </Card>
    )
  }

  onClick = () => {
    this.state.history.push(this.state.pageLink)
  }
}

export default GraphCard
