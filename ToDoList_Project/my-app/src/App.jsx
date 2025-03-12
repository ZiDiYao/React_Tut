import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
    state = {
        todos: [
            { id: "001", name: "eat", done: true },
            { id: "002", name: "coding", done: false },
            { id: "003", name: "writing", done: true },
            { id: "004", name: "playing", done: true },
        ],
    };

    // 添加任务的方法（接收子组件的值并更新状态）
    addTodo = (todoObj) => {
        this.setState({ todos: [...this.state.todos, todoObj] });
    };

    render() {
        return (
            <div>
                {/* 传递 addTodo 方法给 Header 组件 */}
                <Header addTodo={this.addTodo} />
                <List todos={this.state.todos} />
                <Footer />
            </div>
        );
    }
}
