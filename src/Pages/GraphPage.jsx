import React, { Component } from 'react'
import TitleContainer from '../Components/TitleContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'

class GraphPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history: this.props.history,
      graph: this.props.graph,
      title: this.props.name,
    }
  }

  render() {
    return (
      <div className="HomePage">
        <Navbar history={this.state.history} />
        <TitleContainer title="" subtitle={this.props.name}></TitleContainer>
        {this.state.graph}
      </div>
    )
  }
}

export default GraphPage
