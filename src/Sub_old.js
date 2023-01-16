import React from 'react'
let msg = "Hello World!"
/**
 * 函数式组件基础
 * @returns h2组件 + 父传子参数
 */
export default function Sub_old() {
    return (
        <>
            <Sub_1_old msg={msg} />
        </>
    )
}

export  function Sub_1_old(props) {
    return (
        <div>
            <h2>{props.msg}</h2>
            {/* <button onClick={() => { props.fn(123)}}>
                将123传给父组件
            </button> */}
        </div>
    )
}