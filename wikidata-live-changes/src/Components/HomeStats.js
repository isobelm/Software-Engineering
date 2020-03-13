import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class HomeStats extends Component {

	 state = {
		 text: 'something',
		 page: null
	 }

     buttonClickTwo = () => {
		$.ajax({
  		  url: "https://cors-anywhere.herokuapp.com/https://www.wikidata.org/wiki/Special:Statistics",
  		  type: 'GET',
  		  success: function(response) {
  			  this.setState({
  				  page: response,
  			  })
      	  	  }.bind(this)
  	   });
		var foo = $(this.state.page).find('.mw-statistics-articles');
		var foo2 = $(this.state.page).find('.mw-statistics-edits');
		var foo3 = $(this.state.page).find('.mw-statistics-users');
		var foo4 = $(this.state.page).find('.mw-statistics-users-active');
		$("#div1").html(foo);
		$("#div2").html(foo2);
		$("#div3").html(foo3);
		$("#div4").html(foo4);
	}

	render() {
		return (
			<div className="col-md-12">
			<button type="button" className="align-bottom btn btn-outline-primary col-md-2" onClick={ this.buttonClickTwo }>Print Stats</button>
				<div id="div1"> </div>
				<div id="div2">Stats Loading</div>
				<div id="div3"> </div>
				<div id="div4"> </div>
			</div>
		);
	}
}

export default HomeStats;
