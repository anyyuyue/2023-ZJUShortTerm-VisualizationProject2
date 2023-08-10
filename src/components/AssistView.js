
import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';


function AssistView() {
    const {state} = useContext(store);
    const getOption = () => {
        return {
            title: {
                text: state.SelectYear+'年'+state.data[(state.SelectCountry-1)*30].Country+'死因类型分布',
                left: 'center',
                top: '5%'
            },
            //图例
            legend: {
                orient:"horezontal",
                bottom: "5%",
                left: "75%",
                itemWidth: 12,
                itemHeight: 12,
                // icon: "circle",
                itemGap: 8
            },
            label: {
                show: true,
                position: "inside",
                formatter: `{d}%`,
                color: "black", 
                fontSize: 12 
            },
            series: [{
                type: 'pie',
                center: ['40%','62%'],
                data: [
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Infectious_Diseases ,name: '传染病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Nutritional_And_Metabolic_Diseases ,name: '营养与代谢类疾病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Chronic_Non_communicable_Diseases ,name: '慢性非传染性疾病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Maternal_And_Child_Diseases ,name: '母婴疾病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Traumatic_Tnjuries ,name: '外伤类'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Others ,name: '其他'},
                ],
            }],
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />
        {console.log(state.SelectCountry)}
        {console.log(state.SelectYear)}
    </div>;
}

export default AssistView;
