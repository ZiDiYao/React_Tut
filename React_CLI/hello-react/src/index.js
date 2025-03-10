import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

// 入口文件
// 类似于 Main 
// getElementById 可以直接找奥在 public/index.html 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  // StricMode 可以帮助检查代码中不太合理的部分
  // React 的 API 经常会出现弃用的问题
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
