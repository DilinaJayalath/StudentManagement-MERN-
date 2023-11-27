import React, { useState } from "react";  

function IncrementNumber(){

    let [number,upNumber] = useState(0);

    function setValue(){
       upNumber(++number);
    }

    return(
        <div>
            <h3>This is function base Component</h3>
            <h1>Conter Value {number} </h1>
            <button onClick={e=>setValue()}>Increment</button>
        </div>
    )
}

export default IncrementNumber;