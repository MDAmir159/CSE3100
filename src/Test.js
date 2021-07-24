import React, { Component , useState} from 'react';

function Test(){

    const [selected, setSelected] = useState(false)

    const handler = () =>{
        setSelected(true);
    }

    const handler2 = () =>{
        setSelected(false);
    }


    const Component1 = () =>{
        return(
            <div>
                Log In
                <button onClick = {handler} >Submit</button>
            </div>
        )
    }

    const Component2 = () =>{
        return(
            <div>
                Counter
                <button onClick = {handler2} >Back</button>

            </div>
        )
    }

    return(
        <div>
            {
                (selected === false) ? (
                    <Component1/>
                ) : (
                    <Component2/>
                )
            }
        </div>
    )
}
export default Test;