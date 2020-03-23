import { ResponsiveLine } from '@nivo/line'
import React, { Component } from 'react'

class SampleGraph extends Component {
  render = () => (
    <div className="Graph-Container-Card">
      <ResponsiveLine
        data={data}
        margin={{ top: 5, right: 55, bottom: 25, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'accent' }}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}

const data = [
  {
    id: 'japan',
    color: 'hsl(187, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 200,
      },
      {
        x: 'helicopter',
        y: 90,
      },
      {
        x: 'boat',
        y: 112,
      },
      {
        x: 'train',
        y: 2,
      },
      {
        x: 'subway',
        y: 271,
      },
      {
        x: 'bus',
        y: 300,
      },
      {
        x: 'car',
        y: 142,
      },
      {
        x: 'moto',
        y: 197,
      },
      {
        x: 'bicycle',
        y: 107,
      },
      {
        x: 'horse',
        y: 140,
      },
      {
        x: 'skateboard',
        y: 279,
      },
      {
        x: 'others',
        y: 229,
      },
    ],
  },
]

export default SampleGraph
