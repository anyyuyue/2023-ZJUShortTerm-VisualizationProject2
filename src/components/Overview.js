import React, { useContext } from 'react';
import { store } from "../store";
import ReactEcharts from "echarts-for-react";
import 'echarts/map/js/world';

function Overview() {
    const {state, dispatch} = useContext(store);

    const getOption = () => {
        return {
            visualMap: {
                min:1000000,
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
                    data:[
                        //{name: 'China', value:1000},
                        {name: 'Afghanistan', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Albania', value:state.data[9+state.SelectMapYear-1990].Sum,},
                        {name: 'Algeria', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'American', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Andorra', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Angola', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Antigua and Barbuda', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Argentina', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Armenia', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Australia', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Austria', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Azerbaijan', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Bahrain', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Bangladesh', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Belarus', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Belgium', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Benin', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Bermuda', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Bhutan', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        {name: 'Bolivia', value:state.data[0+state.SelectMapYear-1990].Sum,},
                        /*{name: 'Bosnia and Herzegovina</option>
                        {name: 'Botswana</option>
                        {name: 'Brazil</option>
                        {name: 'Brunei</option>
                        {name: 'Bulgaria</option>
                        {name: 'Burkina Faso</option>
                        {name: 'Burundi</option>
                        {name: 'Cambodia</option>
                        {name: 'Cameroon</option>
                        {name: 'Canada</option>
                        {name: 'Cape Verde</option>
                        {name: 'Central African Republic</option>
                        {name: 'Chad</option>
                        {name: 'Chile</option>
                        {name: 'China</option>
                        {name: 'Colombia</option>
                        {name: 'Comoros</option>
                        {name: 'Congo</option>
                        {name: 'Cook Islands</option>
                        {name: 'Costa Rica</option>
                        {name: 'Cote d'Ivoire</option>
                        {name: 'Croatia</option>
                        {name: 'Cuba</option>
                        {name: 'Cyprus</option>
                        {name: 'Czechia</option>
                        {name: 'Democratic Republic of Congo</option>
                        {name: 'Denmark</option>
                        {name: 'Djibouti</option>
                        {name: 'Dominica</option>
                        {name: 'Dominican Republic</option>
                        {name: 'Ecuador</option>
                        {name: 'Egypt</option>
                        {name: 'El Salvador</option>
                        {name: 'Equatorial Guinea</option>
                        {name: 'Eritrea</option>
                        {name: 'Estonia</option>
                        {name: 'Eswatini</option>
                        {name: 'Ethiopia</option>
                        {name: 'Fiji</option>
                        {name: 'Finland</option>
                        {name: 'France</option>
                        {name: 'Gabon</option>
                        {name: 'Gambia</option>
                        {name: 'Georgia</option>
                        {name: 'Germany</option>
                        {name: 'Ghana</option>
                        {name: 'Greece</option>
                        {name: 'Greenland</option>
                        {name: 'Grenada</option>
                        {name: 'Guam</option>
                        {name: 'Guatemala</option>
                        {name: 'Guinea</option>
                        {name: 'Guinea-Bissau</option>
                        {name: 'uyana</option>
                        {name: 'Haiti</option>
                        {name: 'Honduras</option>
                        {name: 'Hungary</option>
                        {name: 'Iceland</option>
                        {name: 'India</option>
                        {name: 'Indonesia</option>
                        {name: 'Ireland</option>        
                        {name: 'Iraq</option>      
                        {name: 'Ireland</option>
                        {name: 'Israel</option>
                        {name: 'Italy</option>
                        {name: 'Jamaica</option>
                        {name: 'Japan</option>
                        {name: 'Jordan</option>
                        {name: 'Kazakhstan</option>
                        {name: 'Kenya</option>
                        {name: 'Kiribati</option>
                        {name: 'Kuwait</option>
                        {name: 'Kyrgyzstan</option>
                        {name: 'Laos</option>
                        {name: 'Latvia</option>
                        {name: 'Lebanon</option>               
                        {name: 'Lesotho</option>   
                        {name: 'Liberia</option>
                        {name: 'Libya</option>
                        {name: 'Lithuania</option>
                        {name: 'Luxembourg</option>
                        {name: 'Madagascar</option>
                        {name: 'Malawi</option>
                        {name: 'alaysia</option>
                        {name: 'Maldives</option>
                        {name: 'Mali</option>
                        {name: 'Malta</option>
                        {name: 'Marshall Islands</option>
                        {name: 'Mauritania</option>
                        {name: 'auritius</option>
                        {name: 'Mexico</option>
                        {name: 'Micronesia</option>
                        {name: 'Moldova</option>
                        {name: 'Monaco</option>
                        {name: 'Mongolia</option>
                        {name: 'Montenegro</option>
                        {name: 'Morocco</option>
                        {name: 'Mozambique</option>
                        {name: 'Myanmar</option>
                        {name: 'Namibia</option>
                        {name: 'Nauru</option>
                        {name: 'Nepal</option>
                        {name: 'Netherlands</option>
                        {name: 'New Zealand</option>
                        {name: 'Nicaragua</option>
                        {name: 'Niger</option>
                        {name: 'Nigeria</option>
                        {name: 'Niue</option>
                        {name: 'North Korea</option>
                        {name: 'North Macedonia</option>
                        {name: 'Northern Mariana Islands</option>
                        {name: 'Norway</option>
                        {name: 'Oman</option>
                        {name: 'Pakistan</option>
                        {name: 'Palau</option>
                        {name: 'Palestine</option>
                        {name: 'Panama</option>
                        {name: 'Papua New Guinea</option>
                        {name: 'Paraguay</option>
                        {name: 'Peru</option>
                        {name: 'Philippines</option>
                        {name: 'Poland</option>
                        {name: 'Portugal</option>
                        {name: 'Puerto Rico</option>
                        {name: 'Qatar</option>
                        {name: 'Romania</option>
                        {name: 'Russia</option>
                        {name: 'Rwanda</option>
                        {name: 'Saint Kitts and Nevis</option>
                        {name: 'Saint Lucia</option>
                        {name: 'Saint Vincent and the Grenadines</option>
                        {name: 'Samoa</option>
                        {name: 'San Marino</option>
                        {name: 'Sao Tome and Principe</option>
                        {name: 'Saudi Arabia</option>
                        {name: 'Senegal</option>
                        {name: 'Serbia</option>
                        {name: 'Seychelles</option>
                        {name: 'Sierra Leone</option>
                        {name: 'Singapore</option>
                        {name: 'Slovakia</option>
                        {name: 'Slovenia</option>
                        {name: 'Solomon Islands</option>
                        {name: 'Somalia</option>
                        {name: 'South Africa</option>
                        {name: 'South Korea</option>
                        {name: 'South Sudan</option>
                        {name: 'Spain</option>
                        {name: 'Sri Lanka</option>
                        {name: 'Sudan</option>
                        {name: 'Suriname</option>
                        {name: 'Sweden</option>
                        {name: 'Switzerland</option>
                        {name: 'Syria</option>
                        {name: 'Taiwan</option>
                        {name: 'Tajikistan</option>
                        {name: 'Tanzania</option>
                        {name: 'Thailand</option>
                        {name: 'Timor</option>
                        {name: 'Togo</option>
                        {name: 'Tokelau</option>
                        {name: 'Tonga</option>
                        {name: 'Trinidad and Tobago</option>
                        {name: 'Tunisia</option>
                        {name: 'Turkey</option>
                        {name: 'Turkmenistan</option>
                        {name: 'Tuvalu</option>
                        {name: 'Uganda</option>
                        {name: 'Ukraine</option>
                        {name: 'United Arab Emirates</option>
                        {name: 'United Kingdom</option>
                        {name: 'United States</option>
                        {name: 'United States Virgin Islands</option>
                        {name: 'Uruguay</option>
                        {name: 'Uzbekistan</option>
                        {name: 'Vanuatu</option>
                        {name: 'Venezuela</option>
                        {name: 'Vietnam</option>
                        {name: 'Yemen</option>
                        {name: 'Zambia</option>
                        {name: 'Zimbabwe</option>*/
                    ]
                }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
        <p>{state.SelectedMapYear}</p>
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
