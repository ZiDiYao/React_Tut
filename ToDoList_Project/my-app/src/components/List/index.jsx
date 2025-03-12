import React, { Component } from 'react'
import Item from '../Item'
import './index.css';

export default class List extends Component {
    render() {
        const { todos } = this.props; // 从 props 里获取 todos

        return (
            <ul className="todo-main">
                {
                    todos.map(todo => (
                        <Item key={todo.id} {...todo} /> // 传递 todo 的属性
                    ))
                }
            </ul>
        );
    }
}
