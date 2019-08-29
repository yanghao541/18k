const { override, addWebpackAlias } = require('customize-cra');
const path = require("path");
module.exports = override(
    addWebpackAlias({        
        ["@"]:path.resolve(__dirname,"./src"),
        ["@actions"]:path.resolve(__dirname,"./src/actions"),
        ["@api"]:path.resolve(__dirname,"./src/api"),
        ["@common"]:path.resolve(__dirname,"./src/common"),
        ["@components"]:path.resolve(__dirname,"./src/components"),
        ["@pages"]:path.resolve(__dirname,"./src/pages"),
        ["@router"]:path.resolve(__dirname,"./src/router"),
        ["@static"]:path.resolve(__dirname,"./src/static"),
        ["@store"]:path.resolve(__dirname,"./src/store"),
        ["@utils"]:path.resolve(__dirname,"./src/utils"),
        ["@lib"]:path.resolve(__dirname,"./src/lib"),
        ["@views"]:path.resolve(__dirname,"./src/views"),
    })
);