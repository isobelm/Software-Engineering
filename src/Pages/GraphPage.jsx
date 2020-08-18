import React, { Component } from 'react';
import Navbar from '../Components/Navbar';

class GraphPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: this.props.history,
      title: this.props.name,
    };
  }

  render() {
    return (
      <div className="HomePage">
        <Navbar history={this.state.history} />
        <div className="row">
          <div className="infobox">
            <h2>{this.state.title}</h2>
            <p />
            <p>{this.props.explanation}</p>
            <p>
              <form onChange={this.props.handlePause}>
                <label>
                  <input
                    type="checkbox"
                    id="paused"
                    name="paused"
                    value={this.props.paused}
                  />{' '}
                  {'Paused'}
                </label>
              </form>
            </p>
          </div>
          {this.props.graph}
        </div>
      </div>
    );
  }
}

export default GraphPage;
