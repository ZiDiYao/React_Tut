import React, { Component } from 'react'; 
import './index.css';

export default class List extends Component {
  render() {
    const { users } = this.props;  // 确保 users 从 props 里获取

    return (
      <div className="row">
        {/* 如果用户为空，显示提示 */}
        {users.length === 0 ? 
          <h3 className="no-users">No RESULT</h3>
         : 
          users.map((user) => (
            <div className="card" key={user.id}> {/* 使用 user.id 作为 key */}
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <img src={user.avatar_url} alt={user.login} className="user-avatar" />
              </a>
              <div className="user-name">{user.login}</div>
            </div>
          ))
        }
      </div>
    );
  }
}
