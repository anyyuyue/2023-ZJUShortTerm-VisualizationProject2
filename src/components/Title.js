import React, { useContext } from 'react';
import { store } from "../store";

function Title() {
    const {state, dispatch} = useContext(store);
    const options = [];
    const years = [];
    let j = 1;
    for (let k = 0; k < 30 ;k++) {
        years.push(
            <option value={1990+k}>{1990+k}</option>
        )
    }
    for (let i = 0; i < 6120; i+=30) {
        options.push(
            <option value={j++}>{state.data[i].Country}</option>
      );
    }
    const selectStyle = {
        margin: '5px',
        padding: '8px 8px', 
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
        color: '#fffff',
        boxShadow: '0 0 5px #999',
    }
    return <div>
        <h1 
        align="center"
        style={{  
            fontFamily: 'Noto Sans SC',
            fontWeight: 500,  
            fontSize: '2rem',
            lineHeight: 1.5,
            color: '#333'
        }}>全球各国死亡数据及死因分析</h1>
        <select style={selectStyle} onChange={() => dispatch({type: 'selectyear'})} id="selectyear">
            {years}
        </select>
        <select style={selectStyle} onChange={() => dispatch({type: 'selectcountry'})} id="selectcountry">
            {options}
        </select>
    </div>
}

export default Title;
