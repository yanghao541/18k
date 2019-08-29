const proxy = require("http-proxy-middleware");


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
  app.use(proxy("/aaa",{ 
    target: "http://www.0quan8.com",
    ws: true,
    changeOrigin:true,
    pathRewrite: {
        "^/aaa": ""
    },
  }));

  app.use(proxy("/index",{
    target:"http://www.0quan8.com",
    changeOrigin:true,
}))

};
