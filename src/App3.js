import React from "react";

let name = "小明", num1 = 1, num2 = 2, arr = [1,2,3,4,5]

/**
 * 在JSX中，想要调用变量，需要在return中直接使用单花括号--{}调用
 * 变量定义、使用，三目运算符，数组遍历
 * 在jsx语法中，需要书写js代码的时候，请先加上{ } 再书写js语法
 */
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