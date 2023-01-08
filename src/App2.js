import React, { Component } from "react";
const MyImg = require("./assert/a.jpg")

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