import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';

function Overview() {
    const {state, dispatch} = useContext(store);
    let result = [];

    for (let i = 0; i < 6120; i+=30) {

        const index = i;
        const offset = state.SelectYear - 1990 + index;

        result.push({
            name: state.data[index].Country, 
            value: state.data[offset].Sum
        });

    }

    //console.log(result);
    const getOption = () => {
        return {
            visualMap: {
                min:100000,
                max:2000000,
                inRange:{
                    color: ['#2a5783', '#9ccfd2', '#87c1ca', '#c3e4dc'].reverse()
                },
                textStyle:{
                    color: '#000000'
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
            title: {
                text: state.SelectYear+'全球各国死亡总人数热力图',
                left: 'center',
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
        <select onChange={() => dispatch({type: 'selectyear'})} id="selectyear">
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
        </select>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
