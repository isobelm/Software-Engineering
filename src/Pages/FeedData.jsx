import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Feed from '../Components/Feed';


/*This is the home page and makes use of the Navbar, 
homeNavContainer, homeStatsContainer and TitleContainer components */

class FeedData extends Component {
  constructor(props) {
    super(props);

    this.state = { history: this.props.history };
  }

  render() {
    return (
      <div className="HomePage">
        <Navbar history={this.state.history} />
        <div className="">
<Feed/>
       </div>
      </div>
    );
  }
}

export default FeedData;
