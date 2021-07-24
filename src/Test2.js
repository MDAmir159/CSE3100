import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';

function Test1() {

    var array = [
        {
            name : "A",
            con : true
        },
        {
            name : "B",
            con : false
        },
        {
            name : "C",
            con : true
        },
        {
            name : "D",
            con : false
        },
        {
            name : "E",
            con : false
        },
        {
            name : "F",
            con : true
        }
    ]

    const ListItems = (e) => {
        const [state, setState] = React.useState(e.value);
    
        const handleChange = (event) => {
            var tempObj = state;
            console.log(tempObj);
            tempObj.con = event.target.checked;
            setState({ ...state, con : tempObj.con });
            array[e.index].con = tempObj.con;
        };
    
        return (
        <div>
             <Switch
                checked={state.con}
                onChange={handleChange}
                name = {state.name}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            /> 
            <h2> {e.index}  {state.con === true ? state.name : "AGM"} </h2>
            <button onClick = {() => {console.log(state);} } ></button>
        </div>
        );
    }

    const intel = array;

    return(
        <div>
            <button value = "Show it" onClick = {() => {console.log(array);} } ></button>
            <ul type = "none">
                {intel.map((item , index) => <ListItems key = {index} index = {index} value = {item} /> )}
            </ul>
        </div>
    );

    
}
export default Test1;