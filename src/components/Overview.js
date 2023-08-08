import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';

function Overview() {
    const {state, dispatch} = useContext(store);
    // let ndata = Array.from({length: 6120}, (_, i) => ({ name: 
    //     state.data[state.SelectMapYear-1990+i*30].Country,
    //     value: state.data[state.SelectMapYear-1990+i*30].Sum }));
    let result = [];

    for (let i = 0; i < 6120; i+=30) {

        const index = i;
        const offset = state.SelectMapYear - 1990 + index;

        result.push({
            name: state.data[index].Country, 
            value: state.data[offset].Sum
        });

    }

    console.log(result);
    const getOption = () => {
        return {
            visualMap: {
                min:10000,
                max:10000000,
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
                    data: result
                }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
        <select onChange={() => dispatch({type: 'selectmapyear'})} id="selectmapyear">
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
    </div>
}

export default Overview;
