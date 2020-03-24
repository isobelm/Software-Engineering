import React, { Component } from 'react'
import TitleContainer from '../Components/TitleContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import HomeNavContainer from '../Components/HomeNavContainer'
import HomeStatsContainer from '../Components/HomeStats'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history }
  }

  render() {
    return (
	
      <div className="HomePage">
        <Navbar history={this.state.history} />
        <div className="HomePageContent row margin-right: -15px margin-left: -15px">
		<div className = "col-5">
           <TitleContainer
             title="Wikidata Live"
             subtitle="A web app to visualise recent changes to Wikidata in quasi real time."
           ></TitleContainer>
		   </div>
		   <div className = "col-7">
		   <div className= "row">
		   <div className="col-4">
           <HomeNavContainer
             btnImage="W"
             btnTitle="Wikidata Feed"
             btnText="Wikidata"
             btnLink="/feed"
           ></HomeNavContainer>
		   </div>
		   <div className="col-4">
           <HomeNavContainer
             btnImage="M"
             btnTitle="Graph Data"
             btnText="Graphs"
             btnLink="/page"
           ></HomeNavContainer>
		   </div>
		   <div className="col-4">
           <HomeNavContainer
             btnImage="👤"
             btnTitle="User Data"
             btnText="Users"
             btnLink="/"
           ></HomeNavContainer>
		   </div>
		   </div>
		   </div>
        </div>
        <HomeStatsContainer />
      </div>
    )
  }
}

export default HomePage
