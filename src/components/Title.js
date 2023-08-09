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
    return <div>
        
        <select onChange={() => dispatch({type: 'selectyear'})} id="selectyear">
            {years}
        </select>
        <select onChange={() => dispatch({type: 'selectcountry'})} id="selectcountry">
            {options}
        </select>
    </div>
}

export default Title;
