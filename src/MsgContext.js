import React, { createContext } from 'react'
import Sub from './Sub'
let MsgContext = createContext()
/**
 * MsgContext 跨组件传值
 * 通过createContext创建的上下文空间自带Provider(提供器)与Consumer(接收器)
 * @returns 无
 */
export default function Sub_2() {
    return (
        <>
            <MsgContext.Consumer>
                {
                    ({msg}) => <h2>孙子组件：{msg}</h2>
                }
            </MsgContext.Consumer>
        </>
    )
}

export function Father() {
    return (
        <>
            <Sub_2/>
        </>
    )
}

export function App() {
    return (
        <>
            <MsgContext.Provider value={{msg: "你好世界!"}}>
                <Father/>
            </MsgContext.Provider>
        </>
    )
}