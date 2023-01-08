import React from 'react'

export default function Sub() {
    const fn = function (fn) {
        console.log("fn: ", fn);
    }
    return (

        <div>
            <Sub_1 msg={'1'} fn={fn} />
        </div>
    )
}

export  function Sub_1(props) {
    return (
        <div>
            <h2>{props.msg}</h2>
            <button onClick={() => { props.fn(123)}}>
                将123传给父组件
            </button>
        </div>
    )
}