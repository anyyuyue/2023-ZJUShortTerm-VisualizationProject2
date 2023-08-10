
import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';


function DetailTypeView() {
    const {state} = useContext(store);
    const getOption = () => {
        return {
            title: {
                text: state.SelectYear+'年'+state.data[(state.SelectCountry-1)*30].Country+'死因类型（慢性非传染性疾病）分布',
                left: 'center',
                top: '5%'
            },
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
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Alzheimers_Disease_and_Other_Dementias ,name: '阿尔茨海默病和其他老年痴呆'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Neoplasms ,name: '癌症'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Cardiovascular_Diseases ,name: '心血管疾病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Diabetes_Mellitus ,name: '糖尿病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Chronic_Kidney_Disease ,name: '慢性肾脏疾病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Chronic_Respiratory_Diseases ,name: '慢性呼吸系统疾病'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Cirrhosis_and_Other_Chronic_Liver_Diseases ,name: '慢性肝炎'},
                    {value: state.data[state.SelectYear-1990+1+(state.SelectCountry-1)*30].Parkinsons_Disease ,name: '帕金森氏病'},
                ],
            }],
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />
    </div>;
}

export default DetailTypeView;
