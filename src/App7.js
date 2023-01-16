import React, { Component } from 'react'
import './common.css'

/**
 * 实现累加的效果
 */
export default class App7 extends Component {
    state = {
        num: 0
    }
    addNum() {
        this.setState({
            num: this.state.num += 1
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.num}</h2>
                <button onClick={this.addNum.bind(this)}>累加</button>
            </div>
        )
    }
}

/**
 * 实现tab栏效果
 */
export class App7_1 extends Component {
    state = {
        arr: ['新闻', '体育', '知识'],
        activeNum: 0
    }
    handleClick(index) {
        this.setState({
            activeNum: index
        })
    }
    render() {
        return (
            <div className='banner'>
                <ul>
                    {
                        this.state.arr.map((value, key) => {
                            return (
                                <li key={key} onClick={this.handleClick.bind(this, key)} 
                                className={this.state.activeNum === key ? 'active': ''}>
                                    {value}
                                </li>
                            )
                        })
                    }
                </ul>
                <ol>
                    {
                        this.state.arr.map((value, key) => {
                            return (
                                <li key={key} className={this.state.activeNum === key ? 'active': ''}>
                                    {value}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}

