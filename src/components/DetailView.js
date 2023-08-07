//本文件展示折线图
import React, { useContext } from 'react';
import ReactEcharts from "echarts-for-react";
import { store } from "../store";
import 'echarts/map/js/china';

function Overview() {
    const {state, dispatch} = useContext(store);
  
/* 折线图 */
    const getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['1990',
                '1991',
                '1992',
                '1993',
                '1994',
                '1995',
                '1996',
                '1997',
                '1998',
                '1999',
                '2000',
                '2001',
                '2002',
                '2003',
                '2004',
                '2005',
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019'
                ]
                //data: data.map(d => d.date) 
                //data: data.year
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [147971,
                156844,
                169156,
                182230,
                194795,
                196528,
                198358,
                206465,
                219770,
                204429,
                203238,
                205192,
                202669,
                207783,
                207855,
                206516,
                205519,
                203597,
                199117,
                194862,
                195184,
                195034,
                196843,
                199281,
                205955,
                211723,
                217570,
                211115,
                219391,
                217641
                ],
                //data: data.map(d => d.value),
                //data: data.sum,
                type: 'line',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
