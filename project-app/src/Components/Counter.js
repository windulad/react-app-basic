import React, { useState } from "react";
import "./Counter.css"

function Counter(){
    var count = 0;
    const [currentstate, updatestate] = useState(count);
    const handleclick = () => {
        updatestate(currentstate + 1)
    };

    return(
        <>
            <div className="counter_parent">
                <div className="main_div">
                    <h3>Counter</h3>
                    <button onClick = {handleclick}>{currentstate}</button>
                </div>
            </div>
        </>
    );
}

export default Counter;