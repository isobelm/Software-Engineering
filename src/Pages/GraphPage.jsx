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
          <div className="col-lg-3 col-12 infobox">
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
          <div className="col-lg-9 col-12">
            {this.props.graph}
          </div>

        </div>
      </div>
    );
  }
}

export default GraphPage;
