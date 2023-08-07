import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';

function Overview() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        return {
            visualMap: {
                min:1,
                max:1000,
                inRange:{
                    color: ['#d94e5d', '#eac736'].reverse()
                },
                textStyle:{
                    color: '#fff'
                },
            },
            geo:{
                map:'world',
                type:'map',
            },
            series:[
                {
                    name: 'world',
                    type: 'map',
                    mapType: 'world',
                    geoIndex: 0,
                    data:[
                        {name: 'China', value:1},
                        {name: 'Russia', value:100000},
                    ]
                }
            ]
            /*xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                   color: 'rgba(180, 180, 180, 0.2)'
                }
            }]*/
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
