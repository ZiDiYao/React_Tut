const { createProxyMiddleware } = require('http-proxy-middleware'); // 这个库是 react 脚手架帮你下载的 

module.exports = function(app) { 

    app.use(
        '/api1',  // 只代理 /api 开头的请求
        // 如果遇到 api 就会转发 
        createProxyMiddleware({
            target: 'http://localhost:5000',  // 目标后端地址
            changeOrigin: true,  // 是否更改请求的源. 默认值是 false. 控制服务器收到的请求头中, host 字段的 Value 
            pathRewrite: { '^/api1': '' },  // 重写 URL（去掉 /api）  
            // 这里要传入一个对象, 要把 api 去掉 
            // 如果不写这个: 路径会发生错误, 因为 URL 中没有 api1 这个东西
        }) 
    ); 

    app.use(
        '/api2',
        createProxyMiddleware({
            target: 'http://localhost:6000', 
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    ); 

    app.use(
        '/api3',
        createProxyMiddleware({
            target: 'http://localhost:7000', 
            changeOrigin: true,
            pathRewrite: { '^/api3': '' }
        })
    );
};  

// 用于配置多个代理  

