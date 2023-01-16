import React, { Component } from "react";
const MyImg = require("./assert/a.jpg")

/**
 * React的JSX是使用大写和小写字母来区分本地组件和HTML组件（如：html就用 div p h1 ， 组件就用 MyButton App Home List等 ）
 * JSX和html的标签属性的区别：1. for 2. class 3. style 之类
 */
export default class App2 extends React.Component {
    render() {
        return (
            <>
                <label htmlFor="ipt">label</label>
                <input type="text" id="ipt" className="ipt" style={{background: 'pink', color: 'green'}} />
                <hr/>
                <img src={MyImg} alt=""/>
            </>
        )
    }
}