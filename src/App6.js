import React, { Component } from 'react'

/**
 * state的简写
 */
export default class App6 extends Component {
    state = {
        name: "你好"
    }
    handleClick(e) {
        this.setState({
            name: "11"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
            </div>
        )
    }
}
