import React, { Component } from 'react';
import Search from './Components/Search';
import List from './Components/List';
import './App.css';

export default class App extends Component { 
  state = { users: [],
    isFirst:true, // 是否第一次打开页面  
    isLoading: false, // 标识是否在加载中 
    erro: '' // 用于储存请求香港的错误信息
  };  // 确保 users 作为 state 存储

  saveUsers = (users) => {
    // 回调函数, 传递给子组件
    this.setState({ users }); // 确保 setState 触发更新
  }   

  updateAppState = (stateObj)=>{ 
    this.setState(stateObj);
  }

  render() {
    return (
      <div className='container'>
        <Search saveUsers={this.saveUsers}/> 
        <List users={this.state.users}/> {/* 确保 users 传递到 List */}
      </div>
    );
  }
}
