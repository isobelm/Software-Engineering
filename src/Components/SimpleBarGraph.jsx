import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';

class SimpleBarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
      fullGraph: this.props.fullGraph,
    };

    this.loadData();
  }

  tooltip = function(click, url) {
    return (
      <div className="iframe-container">
        <iframe
          src={url + click.indexValue}
          className="iframe"
          title="tooltip-option-2"
        />
      </div>
    );
  };

  loadData = () => {
    const getData = this.props.settings.getData.bind(this);
    getData().then(data => {
      const smlData = data.slice(0, this.state.fullGraph ? 30 : 10);
      this.setState({
        loaded: true,
        data: smlData,
      });
    });
  };

  refresh = async () => {
    if (!this.props.paused) {
      const method = this.props.settings.refreshMethod.bind(this);
      await method();
    }
  };

  componentDidMount() {
    this.refreshInterval = setInterval(async () => {
      await this.refresh();
    }, this.props.settings.refreshTime);
  }

  render() {
    let margin = {};
    let label = null;
    let classname = '';
    let onClick = null;
    let clickable = false;
    let tooltip = null;
    let legend = [];
    const colorBy = this.props.settings.colorBy
      ? this.props.settings.colorBy
      : 'index';
    if (this.state.fullGraph) {
      if (this.props.settings.margin) {
        margin = this.props.settings.margin;
      } else {
        margin = { top: 5, right: 30, bottom: 80, left: 80 };
      }
      if (this.props.settings.legend) {
        legend = [this.props.settings.legend];
      }
      label = true;
      classname = 'full-graph-container';
      if (this.props.settings.onClick) {
        onClick = this.props.settings.onClick;
        clickable = true;
      }
      if (this.props.settings.tooltip) {
        tooltip = this.props.settings.tooltip.bind(this);
      }
    } else {
      margin = { top: 0, right: 0, bottom: 0, left: 0 };
      label = false;
      classname = 'Graph-Container-Card';
    }
    return (
      <div>
        {!this.state.loaded ? (
          'Loading...'
        ) : (
          <div className={classname}>
            <ResponsiveBar
              data={this.state.data}
              keys={this.props.settings.keys}
              indexBy={this.props.settings.index}
              margin={margin}
              padding={0.3}
              colors={{ scheme: this.props.settings.colors }}
              colorBy={colorBy}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 30,
                legend: this.props.settings.xAxis,
                legendPosition: 'start',
                legendOffset: 40,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: this.props.settings.yAxis,
                legendPosition: 'middle',
                legendOffset: -60,
              }}
              enableLabel={label}
              onClick={clickable ? onClick : function() {}}
              animate={label}
              isInteractive={label}
              motionStiffness={90}
              motionDamping={15}
              tooltip={tooltip}
              legends={legend}
            />
          </div>
        )}
      </div>
    );
  }
}

export default SimpleBarGraph;
