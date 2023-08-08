
import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';


function Assistview() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        return {
            /*visualMap: {
                min:50,
                max:500000,
                inRange:{
                    color: ['#d94e5d', '#eac736'].reverse()
                },
                textStyle:{
                    color: '#fff'
                },
            },*/
            series: [{
                type: 'pie',
                data: [
                    {value: state.data[state.SelectPieYear-1990+1].Infectious_Diseases ,name: 'Infectious Diseases'},
                    {value: state.data[state.SelectPieYear-1990+1].Chronic_Non_communicable_Diseases ,name: 'Chronic Non-communicable Diseases'},
                    {value: state.data[state.SelectPieYear-1990+1].Maternal_And_Child_Diseases ,name: 'Nutritional and Metabolic Diseases'},
                    {value: state.data[state.SelectPieYear-1990+1].Nutritional_And_Metabolic_Diseases ,name: 'Maternal and Child Diseases'},
                    {value: state.data[state.SelectPieYear-1990+1].Traumatic_Tnjuries ,name: 'Traumatic Tnjuries'},
                    {value: state.data[state.SelectPieYear-1990+1].Others ,name: 'Others'},
                ]
            }],
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
        <p>{state.SelectedPieYear}</p>
        <select onChange={() => dispatch({type: 'selectpieyear'})} id="selectpieyear">
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
    </div>;
}

export default Assistview;
