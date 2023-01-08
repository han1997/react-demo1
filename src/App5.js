import React, { Component } from 'react'

export default class App5 extends Component {
    handlerClick() {
        alert("123")
    }

    render() {
        return (
            <div>
                <buttn onClick={this.handlerClick}>按钮</buttn>
            </div>
        )
    }
}

export class App4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick() {
        this.setState({
            num: this.state.num += 1
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.num}</h2>
                <button onClick={this.handlerClick}>按钮3</button>
            </div>
        )
    }

}

export class App5_1 extends Component {
    constructor(p) {
        super(p)
        this.state = {
            name: "你好"
        }
    }
    handlerChange(e) {
        console.log(e.currentTarget.value);
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <input type="text" value={this.state.name} onChange={this.handlerChange.bind(this)}/>
            </div>
        )
    }
}