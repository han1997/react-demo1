import React, { createContext, useContext } from 'react'
import Sub from './Sub'
let MsgContext = createContext()
/**
 * MsgContext 跨组件传值
 * 上下文空间创建后，子组件也可以使用useContext这个Hook调用上下文空间。
 * @returns 无
 */
export default function Sub_2_1() {
    const {msg} = useContext(MsgContext)
    return (
        <>
            <h2>孙子组件：{msg}</h2>
        </>
    )
}

export function Father() {
    return (
        <>
            <Sub_2_1/>
        </>
    )
}

export function App_1() {
    return (
        <>
            <MsgContext.Provider value={{msg: "你好世界!"}}>
                <Father/>
            </MsgContext.Provider>
        </>
    )
}