import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
    handleKeyUp = (event) => {
        const { keyCode, target } = event;
        if (keyCode !== 13) return; // 按下回车才执行

        // 构建新任务对象
        const newTodo = {
            id: Date.now().toString(), // 生成唯一 ID
            name: target.value,
            done: false,
        };

        // 调用父组件传来的 addTodo 方法，并传递新任务
        this.props.addTodo(newTodo);

        // 清空输入框
        target.value = "";
    };

    render() {
        return (
            <div className="todo-header">
                <input
                    onKeyUp={this.handleKeyUp}
                    type="text"
                    placeholder="请输入您的任务名称, 按回车键确认"
                />
            </div>
        );
    }
}
