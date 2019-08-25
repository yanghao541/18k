// 按需加载
const { override, fixBabelImports,addWebpackAlias } = require("customize-cra");
const path = require("path");
module.exports = override(
    //按需加载antd
    fixBabelImports('import', {        
        libraryName: 'antd-mobile',        
        libraryDirectory: 'es',       
        style: 'css',
    }),
    //别名配置
    addWebpackAlias({        
        ["@"]:path.resolve(__dirname,"./src"),
        ["@actions"]:path.resolve(__dirname,"./src/actions"),
        ["@api"]:path.resolve(__dirname, "./src/api"),
        ["@common"]:path.resolve(__dirname, "./src/common"),
        ["@components"]: path.resolve(__dirname, "./src/components"),
        ["@router"]: path.resolve(__dirname, "./src/router"),
        ["@store"]: path.resolve(__dirname, "./src/store"),
        ["@utils"]: path.resolve(__dirname, "./src/utils"),
        ["@views"]: path.resolve(__dirname, "./src/views"),
    })
);
  

