const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(proxy("/index",{
        target:"http://www.0quan8.com",
        changeOrigin:true,
    }))
}
