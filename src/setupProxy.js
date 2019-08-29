const proxy = require('http-proxy-middleware');

<<<<<<< HEAD
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
=======
module.exports = (app)=>{
  app.use(proxy('/app', { 
    target: 'http://www.0quan8.com',
    ws: true,
    changeOrigin: true,
        pathRewrite: {
      '^/app': ''
    }
  }));
  app.use(proxy('/api', { 
    target: 'http://cmsjapi.dataoke.com',
    changeOrigin: true,
    pathRewrite: {
  '^/api': ''
    }
  }));


};


>>>>>>> 6ccfe8679eef7087608f82c8aeb1a085629ac24a
