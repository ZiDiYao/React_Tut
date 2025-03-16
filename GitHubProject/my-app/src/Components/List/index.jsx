import React, { Component } from 'react'; 
import './index.css';


export default class List extends Component {
  render() {
    return (
      <div className="row">
        {[
          { name: 'User01', img: 'https://robohash.org/user1.png' },
          { name: 'User02', img: 'https://robohash.org/user2.png' },
          { name: 'User03', img: 'https://robohash.org/user3.png' },
          { name: 'User04', img: 'https://robohash.org/user4.png' },
          { name: 'User05', img: 'https://robohash.org/user5.png' },
          { name: 'User06', img: 'https://robohash.org/user6.png' },
        ].map((user, index) => (
          <div className="card" key={index}>
            <img src={user.img} alt={user.name} className="user-avatar" />
            <div className="user-name">{user.name}</div>
          </div>
        ))}
      </div>
    );
  }
}
