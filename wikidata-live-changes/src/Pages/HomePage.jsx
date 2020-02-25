import React, { Component } from 'react'
import TitleContainer from '../Components/TitleContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="HomePage">
        <Navbar history={this.state.histpry} />
        <TitleContainer
          title="Wikidata Live"
          subtitle="A web app to visualise recent changes to Wikidata in quasi real time."
        ></TitleContainer>
      </div>
    )
  }
}

export default HomePage
