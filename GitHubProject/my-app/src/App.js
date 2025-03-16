import React, { Component } from 'react';
import Search from './Components/Search';
import List from './Components/List';
import './App.css';

export default class App extends Component { 
  state = { users: [] };  // ✅ 确保 users 作为 state 存储

  saveUsers = (users) => {
    this.setState({ users }); // ✅ 确保 setState 触发更新
  }

  render() {
    return (
      <div className='container'>
        <Search saveUsers={this.saveUsers}/> 
        <List users={this.state.users}/> {/* ✅ 确保 users 传递到 List */}
      </div>
    );
  }
}
