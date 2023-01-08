import React, { Component } from 'react'

export default class App9 extends Component {
    state = {
        arr: ["张飞", "赵云", "刘备"]
    }
    addFn() {
        let newArr = JSON.parse(JSON.stringify(this.state.arr))
        newArr.push("关羽")
        this.setState({
            arr: newArr
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.arr.map(
                            (item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            }
                        )
                    }
                </ul>
                <button onClick={this.addFn.bind(this)}>添加一项到数组</button>
            </div>
        )
    }
}
