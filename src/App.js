import React, { useEffect, useState } from "react";
import App2 from "./App2";
import App3 from "./App3";
import App5, { App4, App5_1 } from "./App5";
import App6 from "./App6";
import App7, { App7_1 } from "./App7";
import App9 from "./App9";
import Sub from "./Sub";

class Hello extends React.Component {
    render() {
        return (
            <div>
                hello!
                <App2/>
                <App3/>
                <App5/>
                <App4/>
                <App5_1/>
                <App6/>
                <App7/>
                <App9/>
                <App7_1/>
                <Sub/>
                <Effect/>
            </div>
            
        )
    }
}

export default Hello

export function Effect() {
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(1)
    useEffect(()=>{
        console.log("num更新了");
    })
    return (
        <div>
            <h2>{num1}</h2>
            <button onClick={()=>setNum1(num1+1)}>
                num1++
            </button>
            <h2>{num2}</h2>
            <button onClick={()=>setNum2(num2+1)}>
                num2++
            </button>
        </div>
    )
}