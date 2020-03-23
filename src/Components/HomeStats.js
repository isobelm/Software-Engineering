import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class HomeStats extends Component {

	 state = {
		 text: 'something',
		 errorCode: '',
	 }

	 componentDidMount() {
	  this.updateStats();
	  this.intervalID = setInterval(
	    () => this.updateStats(),
	    10000
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
		  },
		 error: this.setState({errorCode: "Could not fetch data"})
  	   });
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-3 text-left"><p id="div1">{ this.state.errorCode }</p>Items</div>
				<div className="col-md-3 text-left"><p id="div2">{ this.state.errorCode }</p>Edits</div>
				<div className="col-md-3 text-left"><p id="div3">{ this.state.errorCode }</p>Users</div>
				<div className="col-md-3 text-left"><p id="div4">{ this.state.errorCode }</p>Active Users</div>
			</div>
		);
	}
}

export default HomeStats;
