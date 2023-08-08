import React, {useContext} from 'react';
import {store} from "../store";

function ControlPanel() {
    const {state, dispatch} = useContext(store);

    return <div>
        <p>{state.count}</p>
        <select onChange={() => dispatch({type: 'increment'})} id="year">
        <option value="1990">1990</option>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        </select>
    </div>;
}

export default ControlPanel;