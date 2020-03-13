import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class HomeStats extends Component {

	 state = {
		 text: 'something',
	 }

     buttonClickTwo = () => {
		$.ajax({
  		  url: "https://cors-anywhere.herokuapp.com/https://www.wikidata.org/wiki/Special:Statistics",
  		  type: 'GET',
  		  success: function(response) {
			  $("#div1").html($(response).find('.mw-statistics-articles'));
	  		  $("#div2").html($(response).find('.mw-statistics-edits'));
	  		  $("#div3").html($(response).find('.mw-statistics-users'));
	  		  $("#div4").html($(response).find('.mw-statistics-users-active'));
      	  	  }
  	   });
	}

	render() {
		return (
			<div className="col-md-12">
			<button type="button" className="align-bottom btn btn-outline-primary col-md-2" onClick={ this.buttonClickTwo }>Print Stats</button>
				<div id="div1" className="col-md-4"> </div>
				<div id="div2" className="col-md-4">Stats Loading</div>
				<div id="div3" className="col-md-4"> </div>
				<div id="div4" className="col-md-4"> </div>
			</div>
		);
	}
}

export default HomeStats;
