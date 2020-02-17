import React, { Component } from "react";

class TestGraphPage extends Component {
	constructor(props) {
		super(props);

		this.state = { loaded: false, data: [], freq: 0 };

		var url = "https://en.wikipedia.org/w/api.php";

		var params = {
			action: "query",
			list: "recentchanges",
			rcprop: "title|ids|sizes|flags",
			rclimit: "43000",
			format: "json",
		};

		url = url + "?origin=*";
		Object.keys(params).forEach(function(key) {
			url += "&" + key + "=" + params[key];
		});

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				var recentchanges = response.query.recentchanges;
				for (var rc in recentchanges) {
					console.log(recentchanges[rc].title);
					debugger;
					let arr = this.state.data;
					arr.push(recentchanges[rc].title);
					this.setState({
						data: arr,
					});
					debugger;
				}
			})
			.catch(function(error) {
				console.log(error);
			});

		var eventsource = new EventSource(
			"https://stream.wikimedia.org/v2/stream/recentchange"
		);

		eventsource.onopen = () => {
			let x = 0;
		};
		eventsource.onmessage = () => {
			this.setState({ freq: this.state.freq + 1 });
		};
	}

	render() {
		return (
			<div>
				<p>Hello</p>
				<p>{this.state.freq}</p>
				<ul>
					{(this.state.data || []).map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>{" "}
			</div>
		);
	}
}

export default TestGraphPage;
