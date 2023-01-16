import React, { useEffect, useState } from "react";
import App2 from "./App2";
import App3 from "./App3";
import App5, { App4, App5_1 } from "./App5";
import App6 from "./App6";
import App7, { App7_1 } from "./App7";
import App9 from "./App9";
import { App } from "./MsgContext";
import { App_1 } from "./MsgContext_2";
import Sub from "./Sub";
import Sub_old from "./Sub_old";

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
                <Sub_old/>
                <Sub/>
                <Effect/>
                <App/>
                <App_1/>
            </div>
            
        )
    }
}

export default Hello

/**
 * useState + useEffect使用
 * 有时我们需要在挂载后请求数据、销毁前清除数据，或是在更新后获取数据，那么就需要借助useEffect。
 * useEffect这个钩子有第二个参数，数据类型是Array。
 * 1. 数组为空，代表不检测数据更新
 * 2. 数组中填写的变量，才会被检测更新
 * 3. 如果整个页面所有数据都需要检测更新，那么可以直接不写数组
 * @returns 无介绍
 */
export function Effect() {
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(1)
    useEffect(()=>{
        // do some requests
        console.log("挂载后");
        return (() => {
            // do some clear
            console.log("销毁前");
        })
    }, [num1])
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