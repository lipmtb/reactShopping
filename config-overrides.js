const {override,addLessLoader,addWebpackAlias  }=require("customize-cra");
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)
module.exports = override(
    addWebpackAlias({
        ['@']:resolve("src"),
        ["components"]:resolve("src/components"),
        ["network"]:resolve("src/network"),
        ["assets"]:resolve("src/assets"),
        ["mixins"]:resolve("src/mixins"),
        ["vender"]:resolve("src/vender"),
        ["views"]:resolve("src/views"),
        ["jjccredux"]:resolve("src/jjccredux"),
        ["hoc"]:resolve("src/hoc"),
    }),
    addLessLoader({
      lessOptions: {
        strictMath: true,
        noIeCompat: true,
        loader: "css-loader",
        modules: {
          localIdentName: "[name]__[local]___[hash:base64:5]",
        }
      }
    })
)