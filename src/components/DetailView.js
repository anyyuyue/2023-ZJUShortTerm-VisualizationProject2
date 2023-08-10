
import React, { useContext } from 'react';
import ReactEcharts from "echarts-for-react";
import { store } from "../store";
import 'echarts/map/js/china';

function DetailView() {
    const {state} = useContext(store);

    let xdata = [];
    let ydata = [];
    for (let i = 0; i < 30; i++){
        xdata.push(state.data[i].Year);
        ydata.push(state.data[(state.SelectCountry-1)*30+i].Sum);
    }

    const getOption = () => {
        return {
            title: {
                text: '1990-2019年间'+state.data[(state.SelectCountry-1)*30].Country+'死亡总人数随时间变化',
                left: 'center',
                top: '5%'
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '10%',
                top: '23%',
                containLabel: true
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                formatter: "{b}年:{c}人"
            },
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex:0
                },
                {
                    show:false,//是否显示选中区域
                    type:'slider',
                    xAxisIndex:0,
                    zoomOnMouseWheel: 'true'
                }
            ],
            
            xAxis: {
                type: 'category',
                data: xdata
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: ydata,
                type: 'line',
                symbol: 'circle',
                symbolSize: 6,
                symbolColor: 'black',
                showAllSymbol: true,
                itemStyle: {
                    color: 'black',
                    borderColor: '#fff',
                    borderWidth: 1,
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#9ccfd2'
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#87c1ca',
                        opacity: 0.2,
                        // shadowBlur: 100
                    }
                },
                smooth: true,
                lineStyle: {
                    normal: {
                        color: 'black'
                    }
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'black'
                    }
                },
                tooltip: {
                    show: true
                },
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />
    </div>
}

export default DetailView;
