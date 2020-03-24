import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';
import $ from 'jquery';

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
  		  url: "https://cors-anywhere.herokuapp.com/https://www.wikidata.org/wiki/Special:Statistics",
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
			  <ListGroup.Item><p id="div1">{ this.state.errorCode }</p>Items</ListGroup.Item>
			  <ListGroup.Item><p id="div2">{ this.state.errorCode }</p>Edits</ListGroup.Item>
			  <ListGroup.Item><p id="div3">{ this.state.errorCode }</p>Users</ListGroup.Item>
			  <ListGroup.Item><p id="div4">{ this.state.errorCode }</p>Active Users</ListGroup.Item>
			</ListGroup>
			</div>
		);
	}
}

export default HomeStats;
