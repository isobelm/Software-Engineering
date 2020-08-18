import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
      fullGraph: this.props.fullGraph,
    };

    this.loadData();
  }

  componentDidMount() {
    this.refreshInterval = setInterval(async () => {
      await this.refresh();
    }, this.props.settings.refreshTime);
  }

  tooltip = function(click, url) {
    return (
      <div className="iframe-container">
        <iframe
          src={url + click.label}
          className="iframe"
          title="tooltip-option-2"
        />
      </div>
    );
  };

  loadData = () => {
    const getData = this.props.settings.getData.bind(this);
    const data = getData().then(() => {
      const smlData = data.slice(0, this.state.fullGraph ? 30 : 10);
      this.setState({
        loaded: true,
        data: smlData,
      });
    });
  };

  refresh = async () => {
    if (!this.props.paused) {
      this.loadData();
    }
  };

  render() {
    let margin = {};
    let label = null;
    let classname = '';
    let onClick = () => {};
    let tooltip = null;
    let colors = { scheme: this.props.settings.colors };
    if (this.props.settings.colorFunction) {
      colors = this.props.settings.colorFunction;
    }
    if (this.state.fullGraph) {
      margin = { top: 30, right: 30, bottom: 30, left: 30 };
      label = true;
      classname = 'full-graph-container';

      if (this.props.settings.onClick) {
        onClick = this.props.settings.onClick;
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
            <ResponsivePie
              data={this.state.data}
              margin={margin}
              innerRadius={0.4}
              padAngle={0}
              cornerRadius={0}
              colors={colors}
              enableRadialLabels={label}
              radialLabel="label"
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor={{ from: 'color' }}
              enableSlicesLabels={label}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              isInteractive={this.state.fullGraph}
              onClick={onClick}
              tooltip={tooltip}
              defs={[
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.4)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    type: 'edit',
                  },
                  id: 'lines',
                },
              ]}
            />
          </div>
        )}
      </div>
    );
  }
}

export default PieChart;
