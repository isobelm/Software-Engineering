import { ResponsiveLine } from '@nivo/line'
import React, { Component } from 'react'

class SampleGraph extends Component {
	render = () => (
		<div className="Graph-Container-Card">
			<ResponsiveLine
				data={this.data}
				margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
				colors={{ scheme: 'nivo' }}
				pointSize={10}
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

	data = [
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
		{
			id: 'france',
			color: 'hsl(169, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 246,
				},
				{
					x: 'helicopter',
					y: 50,
				},
				{
					x: 'boat',
					y: 21,
				},
				{
					x: 'train',
					y: 191,
				},
				{
					x: 'subway',
					y: 247,
				},
				{
					x: 'bus',
					y: 253,
				},
				{
					x: 'car',
					y: 99,
				},
				{
					x: 'moto',
					y: 114,
				},
				{
					x: 'bicycle',
					y: 1,
				},
				{
					x: 'horse',
					y: 177,
				},
				{
					x: 'skateboard',
					y: 172,
				},
				{
					x: 'others',
					y: 70,
				},
			],
		},
		{
			id: 'us',
			color: 'hsl(218, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 114,
				},
				{
					x: 'helicopter',
					y: 74,
				},
				{
					x: 'boat',
					y: 45,
				},
				{
					x: 'train',
					y: 264,
				},
				{
					x: 'subway',
					y: 15,
				},
				{
					x: 'bus',
					y: 15,
				},
				{
					x: 'car',
					y: 45,
				},
				{
					x: 'moto',
					y: 135,
				},
				{
					x: 'bicycle',
					y: 125,
				},
				{
					x: 'horse',
					y: 48,
				},
				{
					x: 'skateboard',
					y: 210,
				},
				{
					x: 'others',
					y: 153,
				},
			],
		},
		{
			id: 'germany',
			color: 'hsl(360, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 220,
				},
				{
					x: 'helicopter',
					y: 17,
				},
				{
					x: 'boat',
					y: 53,
				},
				{
					x: 'train',
					y: 215,
				},
				{
					x: 'subway',
					y: 86,
				},
				{
					x: 'bus',
					y: 286,
				},
				{
					x: 'car',
					y: 62,
				},
				{
					x: 'moto',
					y: 252,
				},
				{
					x: 'bicycle',
					y: 245,
				},
				{
					x: 'horse',
					y: 241,
				},
				{
					x: 'skateboard',
					y: 290,
				},
				{
					x: 'others',
					y: 176,
				},
			],
		},
		{
			id: 'norway',
			color: 'hsl(355, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 177,
				},
				{
					x: 'helicopter',
					y: 244,
				},
				{
					x: 'boat',
					y: 72,
				},
				{
					x: 'train',
					y: 290,
				},
				{
					x: 'subway',
					y: 127,
				},
				{
					x: 'bus',
					y: 50,
				},
				{
					x: 'car',
					y: 28,
				},
				{
					x: 'moto',
					y: 254,
				},
				{
					x: 'bicycle',
					y: 247,
				},
				{
					x: 'horse',
					y: 153,
				},
				{
					x: 'skateboard',
					y: 135,
				},
				{
					x: 'others',
					y: 116,
				},
			],
		},
	]
}

export default SampleGraph
