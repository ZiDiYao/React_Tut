import React from 'react';
import ReactDOM from 'react-dom/client';  // 注意这里的 `/client`
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
