import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';
import $ from 'jquery';

//These load the statistics from a server we set up and displays them on the homepage

class HomeStats extends Component {

	 state = {
		 text: 'something',
		 errorCode: 'Loading...',
	 }

	 componentDidMount() {
	  this.updateStats();
	  this.intervalID = setInterval(
	    () => this.updateStats(),
	    5000
	  );
	}
	componentWillUnmount() {
	  clearInterval(this.intervalID);
	}

     updateStats = () => {
		$.ajax({
  		  url: "https://protected-shelf-93081.herokuapp.com/https://www.wikidata.org/wiki/Special:Statistics",
  		  type: 'GET',
  		  success: function(response) {
			  $("#div1").html($($(response).find('.mw-statistics-articles')).find('.mw-statistics-numbers'));
	  		  $("#div2").html($($(response).find('.mw-statistics-edits')).find('.mw-statistics-numbers'));
	  		  $("#div3").html($($(response).find('.mw-statistics-users')).find('.mw-statistics-numbers'));
	  		  $("#div4").html($($(response).find('.mw-statistics-users-active')).find('.mw-statistics-numbers'));
		  }
  	   });
	}

	render() {
		return (
			<div className="row">
			<ListGroup horizontal>
			  <ListGroup.Item className="list-group-item-black"><h1 id="div1">{ this.state.errorCode }</h1><h1>Items</h1></ListGroup.Item>
			  <ListGroup.Item  className="list-group-item-red"><h1 id="div2">{ this.state.errorCode }</h1><h1>Edits</h1></ListGroup.Item>
			  <ListGroup.Item  className="list-group-item-green"><h1 id="div3">{ this.state.errorCode }</h1><h1>Users</h1></ListGroup.Item>
			  <ListGroup.Item  className="list-group-item-blue"><h1 id="div4">{ this.state.errorCode }</h1><h1>Active Users</h1></ListGroup.Item>
			</ListGroup>
			</div>
		);
	}
}

export default HomeStats;
