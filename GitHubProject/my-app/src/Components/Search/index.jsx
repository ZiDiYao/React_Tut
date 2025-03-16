import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component { 
    search = () => { 
        const { keyWordElement } = this;
        const keyWord = keyWordElement.value.trim();
        if (!keyWord) return alert("请输入搜索关键词！");

        console.log("搜索关键词:", keyWord);

        // ✅ 确保 GitHub API 正确返回数据
        axios.get(`https://api.github.com/search/users?q=${keyWord}`)
            .then(response => {
                console.log('成功的响应:', response.data);
                this.props.saveUsers(response.data.items);  // ✅ 确保传递数据
            })
            .catch(error => {
                console.error('请求失败:', error);
            });
    }

    render() {
        return (
            <section className="jumbotron"> 
                <h3 className='jumbortron-heading'>Search Github Users</h3> 
                <div> 
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="Enter username" /> <br />
                    <button onClick={this.search} name="btn">Search</button>
                </div>
            </section>
        );
    }
}
