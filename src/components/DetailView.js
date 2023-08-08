//本文件展示折线图
import React, { useContext } from 'react';
import ReactEcharts from "echarts-for-react";
import { store } from "../store";
import 'echarts/map/js/china';

function Overview() {
    const {state, dispatch} = useContext(store);
    const getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data:[
                state.data[0].Year,
                state.data[1].Year,
                state.data[2].Year,
                state.data[3].Year,
                state.data[4].Year,
                state.data[5].Year,
                state.data[6].Year,
                state.data[7].Year,
                state.data[8].Year,
                state.data[9].Year,
                state.data[10].Year,
                state.data[11].Year,
                state.data[12].Year,
                state.data[13].Year,
                state.data[14].Year,
                state.data[15].Year,
                state.data[16].Year,
                state.data[17].Year,
                state.data[18].Year,
                state.data[19].Year,
                state.data[20].Year,
                state.data[21].Year,
                state.data[12].Year,
                state.data[23].Year,
                state.data[24].Year,
                state.data[25].Year,
                state.data[26].Year,
                state.data[27].Year,
                state.data[28].Year,
                state.data[29].Year,
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data:[
                state.data[(state.selectcountry-1)*30].Sum,
                state.data[(state.selectcountry-1)*30+1].Sum,
                state.data[(state.selectcountry-1)*30+2].Sum,
                state.data[(state.selectcountry-1)*30+3].Sum,
                state.data[(state.selectcountry-1)*30+4].Sum,
                state.data[(state.selectcountry-1)*30+5].Sum,
                state.data[(state.selectcountry-1)*30+6].Sum,
                state.data[(state.selectcountry-1)*30+7].Sum,
                state.data[(state.selectcountry-1)*30+8].Sum,
                state.data[(state.selectcountry-1)*30+9].Sum,
                state.data[(state.selectcountry-1)*30+10].Sum,
                state.data[(state.selectcountry-1)*30+11].Sum,
                state.data[(state.selectcountry-1)*30+12].Sum,
                state.data[(state.selectcountry-1)*30+13].Sum,
                state.data[(state.selectcountry-1)*30+14].Sum,
                state.data[(state.selectcountry-1)*30+15].Sum,
                state.data[(state.selectcountry-1)*30+16].Sum,
                state.data[(state.selectcountry-1)*30+17].Sum,
                state.data[(state.selectcountry-1)*30+18].Sum,
                state.data[(state.selectcountry-1)*30+19].Sum,
                state.data[(state.selectcountry-1)*30+20].Sum,
                state.data[(state.selectcountry-1)*30+21].Sum,
                state.data[(state.selectcountry-1)*30+12].Sum,
                state.data[(state.selectcountry-1)*30+23].Sum,
                state.data[(state.selectcountry-1)*30+24].Sum,
                state.data[(state.selectcountry-1)*30+25].Sum,
                state.data[(state.selectcountry-1)*30+26].Sum,
                state.data[(state.selectcountry-1)*30+27].Sum,
                state.data[(state.selectcountry-1)*30+28].Sum,
                state.data[(state.selectcountry-1)*30+29].Sum,
                ],
                type: 'line',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    };

    return <div>
        <select onChange={() => dispatch({type: 'selectcountry'})} id="country">
            <option value= "1">	Afghanistan</option>    
            <option value= "2">	Albania</option>
            <option value= "3">	Algeria</option>
            <option value= "4">	American Samoa</option>
            <option value= "5">	Andorra</option>
            <option value= "6">	Angola</option>
            <option value= "7">	Antigua and Barbuda</option>
            <option value= "8">	Argentina</option>
            <option value= "9">	Armenia </option>
            <option value= "10">Australia</option>            
            <option value= "11">Austria</option>
            <option value= "12">Azerbaijan</option>
            <option value= "13">Bahamas</option>
            <option value= "14">Bahrain</option>
            <option value= "15">Bangladesh</option>
            <option value= "16">Barbados</option>
            <option value= "17">Belarus</option>
            <option value= "18">Belgium</option>
            <option value= "19">Belize</option>
            <option value= "20">Benin</option>
            <option value= "21">Bermuda</option>
            <option value= "22">Bhutan</option>
            <option value= "23">Bolivia</option>
            <option value= "24">Bosnia and Herzegovina</option>
            <option value= "25">Botswana</option>
            <option value= "26">Brazil</option>
            <option value= "27">Brunei</option>
            <option value= "28">Bulgaria</option>
            <option value= "29">Burkina Faso</option>
            <option value= "30">Burundi</option>
            <option value= "31">Cambodia</option>
            <option value= "32">Cameroon</option>
            <option value= "33">Canada</option>
            <option value= "34">Cape Verde</option>
            <option value= "35">Central African Republic</option>
            <option value= "36">Chad</option>
            <option value= "37">Chile</option>
            <option value= "38">China</option>
            <option value= "39">Colombia</option>
            <option value= "40">Comoros</option>
            <option value= "41">Congo</option>
            <option value= "42">Cook Islands</option>
            <option value= "43">Costa Rica</option>
            <option value= "44">Cote d'Ivoire</option>
            <option value= "45">Croatia</option>
            <option value= "46">Cuba</option>
            <option value= "47">Cyprus</option>
            <option value= "48">Czechia</option>
            <option value= "49">Democratic Republic of Congo</option>
            <option value= "50">Denmark</option>
            <option value= "51">Djibouti</option>
            <option value= "52">Dominica</option>
            <option value= "53">Dominican Republic</option>
            <option value= "54">Ecuador</option>
            <option value= "55">Egypt</option>
            <option value= "56">El Salvador</option>
            <option value= "57">Equatorial Guinea</option>
            <option value= "58">Eritrea</option>
            <option value= "59">Estonia</option>
            <option value= "60">Eswatini</option>
            <option value= "61">Ethiopia</option>
            <option value= "62">Fiji</option>
            <option value= "63">Finland</option>
            <option value= "64">France</option>
            <option value= "65">Gabon</option>
            <option value= "66">Gambia</option>
            <option value= "67">Georgia</option>
            <option value= "68">Germany</option>
            <option value= "69">Ghana</option>
            <option value= "70">Greece</option>
            <option value= "71">Greenland</option>
            <option value= "72">Grenada</option>
            <option value= "73">Guam</option>
            <option value= "74">Guatemala</option>
            <option value= "75">Guinea</option>
            <option value= "76">Guinea-Bissau</option>
            <option value= "77">Guyana</option>
            <option value= "78">Haiti</option>
            <option value= "79">Honduras</option>
            <option value= "80">Hungary</option>
            <option value= "81">Iceland</option>
            <option value= "82">India</option>
            <option value= "83">Indonesia</option>
            <option value= "84">Ireland</option>        
            <option value= "85">Iraq</option>      
            <option value= "86">Ireland</option>
            <option value= "87">Israel</option>
            <option value= "88">Italy</option>
            <option value= "89">Jamaica</option>
            <option value= "90">Japan</option>
            <option value= "91">Jordan</option>
            <option value= "92">Kazakhstan</option>
            <option value= "93">Kenya</option>
            <option value= "94">Kiribati</option>
            <option value= "95">Kuwait</option>
            <option value= "96">Kyrgyzstan</option>
            <option value= "97">Laos</option>
            <option value= "98">Latvia</option>
            <option value= "99">Lebanon</option>               
            <option value= "100">Lesotho</option>   
            <option value= "101">Liberia</option>
            <option value= "102">Libya</option>
            <option value= "103">Lithuania</option>
            <option value= "104">Luxembourg</option>
            <option value= "105">Madagascar</option>
            <option value= "106">Malawi</option>
            <option value= "107">Malaysia</option>
            <option value= "108">Maldives</option>
            <option value= "109">Mali</option>
            <option value= "110">Malta</option>
            <option value= "111">Marshall Islands</option>
            <option value= "112">Mauritania</option>
            <option value= "113">Mauritius</option>
            <option value= "114">Mexico</option>
            <option value= "115">Micronesia</option>
            <option value= "116">Moldova</option>
            <option value= "117">Monaco</option>
            <option value= "118">Mongolia</option>
            <option value= "119">Montenegro</option>
            <option value= "120">Morocco</option>
            <option value= "121">Mozambique</option>
            <option value= "122">Myanmar</option>
            <option value= "123">Namibia</option>
            <option value= "124">Nauru</option>
            <option value= "125">Nepal</option>
            <option value= "126">Netherlands</option>
            <option value= "127">New Zealand</option>
            <option value= "128">Nicaragua</option>
            <option value= "129">Niger</option>
            <option value= "130">Nigeria</option>
            <option value= "131">Niue</option>
            <option value= "132">North Korea</option>
            <option value= "133">North Macedonia</option>
            <option value= "134">Northern Mariana Islands</option>
            <option value= "135">Norway</option>
            <option value= "136">Oman</option>
            <option value= "137">Pakistan</option>
            <option value= "138">Palau</option>
            <option value= "139">Palestine</option>
            <option value= "140">Panama</option>
            <option value= "141">Papua New Guinea</option>
            <option value= "142">Paraguay</option>
            <option value= "143">Peru</option>
            <option value= "144">Philippines</option>
            <option value= "145">Poland</option>
            <option value= "146">Portugal</option>
            <option value= "147">Puerto Rico</option>
            <option value= "148">Qatar</option>
            <option value= "149">Romania</option>
            <option value= "150">Russia</option>
            <option value= "151">Rwanda</option>
            <option value= "152">Saint Kitts and Nevis</option>
            <option value= "153">Saint Lucia</option>
            <option value= "154">Saint Vincent and the Grenadines</option>
            <option value= "155">Samoa</option>
            <option value= "156">San Marino</option>
            <option value= "157">Sao Tome and Principe</option>
            <option value= "158">Saudi Arabia</option>
            <option value= "159">Senegal</option>
            <option value= "160">Serbia</option>
            <option value= "161">Seychelles</option>
            <option value= "162">Sierra Leone</option>
            <option value= "163">Singapore</option>
            <option value= "164">Slovakia</option>
            <option value= "165">Slovenia</option>
            <option value= "166">Solomon Islands</option>
            <option value= "167">Somalia</option>
            <option value= "168">South Africa</option>
            <option value= "169">South Korea</option>
            <option value= "170">South Sudan</option>
            <option value= "171">Spain</option>
            <option value= "172">Sri Lanka</option>
            <option value= "173">Sudan</option>
            <option value= "174">Suriname</option>
            <option value= "175">Sweden</option>
            <option value= "176">Switzerland</option>
            <option value= "177">Syria</option>
            <option value= "178">Taiwan</option>
            <option value= "179">Tajikistan</option>
            <option value= "180">Tanzania</option>
            <option value= "181">Thailand</option>
            <option value= "182">Timor</option>
            <option value= "183">Togo</option>
            <option value= "184">Tokelau</option>
            <option value= "185">Tonga</option>
            <option value= "186">Trinidad and Tobago</option>
            <option value= "187">Tunisia</option>
            <option value= "188">Turkey</option>
            <option value= "189">Turkmenistan</option>
            <option value= "190">Tuvalu</option>
            <option value= "191">Uganda</option>
            <option value= "192">Ukraine</option>
            <option value= "193">United Arab Emirates</option>
            <option value= "194">United Kingdom</option>
            <option value= "195">United States</option>
            <option value= "196">United States Virgin Islands</option>
            <option value= "197">Uruguay</option>
            <option value= "198">Uzbekistan</option>
            <option value= "199">Vanuatu</option>
            <option value= "200">Venezuela</option>
            <option value= "201">Vietnam</option>
            <option value= "202">Yemen</option>
            <option value= "203">Zambia</option>
            <option value= "204">Zimbabwe</option>
        </select>
        <ReactEcharts option={getOption()} />;
    </div>
}

export default Overview;
