import React from "react";

let name = "小明", num1 = 1, num2 = 2, arr = [1,2,3,4,5]

export default class App3 extends React.Component {
    render() {
        return(
            <div>
                <p>{name}</p>
                <p>{num1}和{num2}中大的是:{num1 > num2 ? num1 : num2}</p>
                <ul>
                    {arr.map((v,k) => (
                        <li key={k}>{v}</li>
                    ))}
                </ul>
            </div>
        )
    }
}