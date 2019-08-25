const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'https://www.baidu.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }));
// 多接口就再复制

};