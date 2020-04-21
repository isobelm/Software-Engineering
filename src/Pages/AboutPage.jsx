import React, { Component } from 'react'
import TitleContainer from '../Components/TitleContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import HomeNavContainer from '../Components/HomeNavContainer'
import HomeStatsContainer from '../Components/HomeStats'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class AboutPage extends Component {
  constructor(props) {
    super(props)

    this.state = { history: this.props.history }
  }

  render() {
    return (
    <div className ="aboutPageContainer">
    <Navbar history={this.state.history}/>
    <div className =" text-left">
    <div className = "row">
        <div className="col-lg-6 col-sm-12  aboutPageContent">
            <div className="explainContainer text-left">
                <h3 className="text-blue">Why we made our project</h3>
                    <p>
                    We are a group of Computer Science students studying in Trinity College Dublin. 
                    We undertake a module in which we are given real world projects from a variety of individuals, reasearchers and businesses. 
                    </p>
                    <p>
                      Our clients were Fabrizio and Damien who work in the Trinity ADAPT research center and they tasked us
                      to create a website that will visualise various changes to Wikidata in quasi-real-time.
                      Its targeted users are researchers and should make it easier to identify spam and incorrect or malicious edits to Wikidata.
                    </p>
                    
            </div>
            <br></br>
            <div className = " licenseContainer text-left">
            <h3 className="text-blue">Licensing</h3>
            <p>
              We have insured all libraries and all project dependencies licenses cover our web apps intended use.
            </p>
            <p>
              We have decided to use an <a href="https://opensource.org/licenses/MIT">MIT license</a> for this project.
            </p>
            <p>More in depth information along with the projects source code can be found on the projects <a href = "https://github.com/isobelm/Software-Engineering">Github.</a> </p>
            </div>
      </div>
      <div className="col-lg-6 col-sm-12 profiles">
      <div className="client"> 
            <h3 className = "text-red">Clients</h3>
            <div className="card-deck">
  <div class="card card-profile">
  
    <div class="card-body">
    <h5 class="card-title text-center ">Damien Graux</h5>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://dgraux.github.io/"><FontAwesomeIcon icon={faLink}/></a>
      </div>
    </div>
  </div>
  <div class="card card-profile">
    <div class="card-body">
    <h5 class="card-title text-center">Fabrizio Orlandi</h5>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://www.scss.tcd.ie/personnel/orlandif"><FontAwesomeIcon icon={faLink}/></a>
      </div>
    </div>
  </div>
  </div>
            </div>
            <br></br>
      <h3 className = "text-red">Students</h3>
      <div className="card-deck  text-center">
  <div class="card card-profile">
  
    <div class="card-body">
    <h5 class="card-title text-center">Brian<br/> Lynch</h5>
      <p class="card-text"><b>3rd Year CS</b><br/>Frontend Team</p>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://github.com/brianlunch"><FontAwesomeIcon icon={faGithub}/></a>
      
      </div>
    </div>
  </div>
  <div class="card card-profile">
    <div class="card-body">
    <h5 class="card-title text-center">Isobel<br/> Mahon</h5>
      <p class="card-text"><b>3rd Year CS</b><br/>Frontend Team</p>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://github.com/isobelm"><FontAwesomeIcon icon={faGithub}/></a>
     
      </div>
    </div>
  </div>
  <div class="card card-profile">
    <div class="card-body">
    <h5 class="card-title text-center">Odhran<br/>  Mullen</h5>
      <p class="card-text"><b>3rd Year CSB</b><br/>Backend Team</p>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://github.com/omullan"><FontAwesomeIcon icon={faGithub}/></a>
      
      </div>
    </div>
  </div>
</div>
<div className="card-deck text-center">
  <div class="card card-profile">
  
    <div class="card-body">
    <h5 class="card-title text-center">Alex<br/> Mahon</h5>
      <p class="card-text"><b>2nd Year CS</b><br/>Frontend Team</p>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://github.com/Juuiko"><FontAwesomeIcon icon={faGithub}/></a>
      
      </div>
    </div>
  </div>
  <div class="card card-profile">
    <div class="card-body">
      <h5 class="card-title text-center">Flora<br/>  Molnar</h5>
      <p class="card-text"><b>2nd Year CSB</b><br/>Frontend Team</p>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://github.com/flora-m"><FontAwesomeIcon icon={faGithub}/></a>
      
      </div>
      
    </div>
  </div>
  <div class="card card-profile">
    <div class="card-body">
    <h5 class="card-title text-center">Lexes<br/>  Mantiquilla</h5>
      <p class="card-text"><b>2nd Year CS</b><br/>Backend Team</p>
      <div className="text-center">
      <a target="_blank" className="GH aBlack" href="https://github.com/lexesjan"><FontAwesomeIcon icon={faGithub}/></a>
      
      </div>
    </div>
  </div>
</div>

      </div>
      </div>
    

      </div>
    </div>
    )
  }
}

export default AboutPage
