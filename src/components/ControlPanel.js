
import React, { useContext } from 'react';
import ReactEcharts from "echarts-for-react";
import {store} from "../store";
import * as echarts from 'echarts';

function ControlPanel() {
    
    const {state} = useContext(store);
    let country = [];
    let inf= [];
    let chr= [];
    let nut= [];
    let mat= [];
    let tra= [];
    let oth= [];
    for (let i = 0; i < 6120; i+=30) {
        country.push(state.data[i].Country);
        inf.push(state.data[state.SelectYear-1990+1+i].Infectious_Diseases);
        chr.push(state.data[state.SelectYear-1990+1+i].Chronic_Non_communicable_Diseases);
        nut.push(state.data[state.SelectYear-1990+1+i].Nutritional_And_Metabolic_Diseases);
        mat.push(state.data[state.SelectYear-1990+1+i].Maternal_And_Child_Diseases);
        tra.push(state.data[state.SelectYear-1990+1+i].Traumatic_Tnjuries);
        oth.push(state.data[state.SelectYear-1990+1+i].Others);
    }
    const getOption = () => {
        return {
            title: {
                text: state.SelectYear+'年全球各国/地区死因堆叠柱状图',
                left: 'center',
                top: '5%',
            },
            grid: {
                left: '2%',
                right: '5%',
                bottom: '15%',
                top: '20%',
                containLabel: true
            },
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex:0
                },
                {
                    show:true,//是否展示x轴范围
                    type:'slider',
                    xAxisIndex:0,
                    zoomOnMouseWheel: 'true',
                    startValue: 0, // 从头开始。
                    endValue: 4, // 一次性展示几个。
                },
            ],
            tooltip: {
                show: true,
            },
            legend: {
                orient:"horezontal",
                bottom: "50%",
                left: "75%",
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 5
            },
            xAxis: {
                type: 'category',
                data: country,
            },
            yAxis: {
                type: 'value',
            },
            series: [
            {
                data: inf,
                name: "传染病",
                type: 'bar',
                stack: 'x',
            },
            {
                data: chr,
                name: "慢性非传染性疾病",
                type: 'bar',
                stack: 'x'
            },
            {
                data: nut,
                name: "营养与代谢类疾病",
                type: 'bar',
                stack: 'x'
            },
            {
                data: mat,
                name:"母婴疾病",
                type: 'bar',
                stack: 'x'
            },
            {
                data: tra,
                name: "外伤类",
                type: 'bar',
                stack: 'x'
            },
            {
                data: oth,
                name: "其他",
                type: 'bar',
                stack: 'x'
            },
            ],
            animation: true
        };
    };
    
    return <div >
        <ReactEcharts option={getOption()} />
    </div>;
}

export default ControlPanel;