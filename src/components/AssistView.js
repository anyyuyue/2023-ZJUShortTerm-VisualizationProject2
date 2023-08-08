
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
            series: [
              {
                type: 'pie',
                data: [
                  {
                    value: 123,
                    name: '直接访问'
                  },
                  {
                    value: 234,
                    name: '联盟广告'
                  },
                  {
                    value: 1548,
                    name: '搜索引擎'
                  }
                ]
              }
            ],
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

  export default Overview;
