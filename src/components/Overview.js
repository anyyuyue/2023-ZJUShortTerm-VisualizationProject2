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
                roam: true, //支持拖拽缩放
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1, //缩放最小大小
              max: 10, //缩放最大大小
            },
            },
            series:[
                {
                    name: 'world',
                    type: 'map',
                    mapType: 'world',
                    geoIndex: 0,
                    data:[
                        {name: state.data[state.selectYear-1990+0 ].Country, value:state.data[state.selectYear-1990+0 ].Sum},
                        {name: state.data[state.selectYear-1990+30].Country, value:state.data[state.selectYear-1990+30].Sum}
                    ]
                }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
        <select onChange={() => dispatch({type: 'selectyear'})} id="year">
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
        </select>
    </div>
}

export default Overview;
