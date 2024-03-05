import { ResponsiveLine } from '@nivo/line'

const data = [
    {
        "id": "japan",
        "color": "hsl(256, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 257
            },
            {
                "x": "helicopter",
                "y": 225
            },
            {
                "x": "boat",
                "y": 72
            },
            {
                "x": "train",
                "y": 201
            },
            {
                "x": "subway",
                "y": 74
            },
            {
                "x": "bus",
                "y": 74
            },
            {
                "x": "car",
                "y": 190
            },
            {
                "x": "moto",
                "y": 31
            },
            {
                "x": "bicycle",
                "y": 153
            },
            {
                "x": "horse",
                "y": 298
            },
            {
                "x": "skateboard",
                "y": 144
            },
            {
                "x": "others",
                "y": 44
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(179, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 284
            },
            {
                "x": "helicopter",
                "y": 268
            },
            {
                "x": "boat",
                "y": 263
            },
            {
                "x": "train",
                "y": 95
            },
            {
                "x": "subway",
                "y": 194
            },
            {
                "x": "bus",
                "y": 49
            },
            {
                "x": "car",
                "y": 239
            },
            {
                "x": "moto",
                "y": 21
            },
            {
                "x": "bicycle",
                "y": 297
            },
            {
                "x": "horse",
                "y": 102
            },
            {
                "x": "skateboard",
                "y": 150
            },
            {
                "x": "others",
                "y": 243
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(206, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 92
            },
            {
                "x": "helicopter",
                "y": 80
            },
            {
                "x": "boat",
                "y": 192
            },
            {
                "x": "train",
                "y": 126
            },
            {
                "x": "subway",
                "y": 0
            },
            {
                "x": "bus",
                "y": 67
            },
            {
                "x": "car",
                "y": 195
            },
            {
                "x": "moto",
                "y": 162
            },
            {
                "x": "bicycle",
                "y": 219
            },
            {
                "x": "horse",
                "y": 64
            },
            {
                "x": "skateboard",
                "y": 70
            },
            {
                "x": "others",
                "y": 284
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(74, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 196
            },
            {
                "x": "helicopter",
                "y": 118
            },
            {
                "x": "boat",
                "y": 93
            },
            {
                "x": "train",
                "y": 299
            },
            {
                "x": "subway",
                "y": 106
            },
            {
                "x": "bus",
                "y": 17
            },
            {
                "x": "car",
                "y": 263
            },
            {
                "x": "moto",
                "y": 97
            },
            {
                "x": "bicycle",
                "y": 238
            },
            {
                "x": "horse",
                "y": 6
            },
            {
                "x": "skateboard",
                "y": 99
            },
            {
                "x": "others",
                "y": 101
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(355, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 260
            },
            {
                "x": "helicopter",
                "y": 89
            },
            {
                "x": "boat",
                "y": 240
            },
            {
                "x": "train",
                "y": 200
            },
            {
                "x": "subway",
                "y": 182
            },
            {
                "x": "bus",
                "y": 260
            },
            {
                "x": "car",
                "y": 279
            },
            {
                "x": "moto",
                "y": 228
            },
            {
                "x": "bicycle",
                "y": 57
            },
            {
                "x": "horse",
                "y": 214
            },
            {
                "x": "skateboard",
                "y": 110
            },
            {
                "x": "others",
                "y": 61
            }
        ]
    }
]

const Graph = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
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
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default Graph;