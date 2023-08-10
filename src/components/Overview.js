import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';

function OverView() {
    const {state} = useContext(store);
    let result = [];

    for (let i = 0; i < 6120; i+=30) {

        const index = i;
        const offset = state.SelectYear - 1990 + index;

        result.push({
            name: state.data[index].Country, 
            value: state.data[offset].Sum
        });

    }

    console.log(result);
    const getOption = () => {
        return {
            visualMap: {
                min:100000,
                max:2000000,
                inRange:{
                    color: ['#2a5783', '#87c1ca', '#9ccfd2', '#c3e4dc'].reverse()
                },
                textStyle:{
                    color: '#000000'
                },
            },
            geo:{
                layoutSize: '400%',
                top: '20%',
                bottom: '5%',
                itemStyle:{
                    normal:{
                        borderWidth:0.35
                    },
                    emphasis:{
                        color:'#fbe7aa',
                        borderWidth:1.25,
                    }
                },
                label:{
                    emphasis:{
                        color:'#000000'
                    }
                },
                map:'world',
                type:'map',
                roam: true,
                scaleLimit: {
                    min: 1, 
                    max: 10, 
                },
            },
            title: {
                text: state.data[state.SelectYear-1990].Year+'年全球各国/地区死亡总人数地理热力图',
                left: 'center',
                top:'5%'
            },
            series:[
                {
                    name: 'world',
                    type: 'map',
                    mapType: 'world',
                    geoIndex: 0,
                    data: result
                }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />
    </div>
}

export default OverView;
