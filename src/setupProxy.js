const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/aaa",{ 
        target: "http://www.0quan8.com",
        ws: true,
        changeOrigin:true,
        pathRewrite: {
            "^/aaa": ""
        },
    }))
}
// "/aaa":{ 
//     target: "http://www.0quan8.com",
//     changeOrigin:true,
//     ws: true,
//     pathRewrite: {
//         "^/aaa": ""
//     },