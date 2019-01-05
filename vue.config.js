const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const CopyWebpackPlugin = require("copy-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  lintOnSave: false,
  outputDir: path.resolve(__dirname, "public/"),
  baseUrl: "",
  configureWebpack: {
    context: path.resolve(__dirname, ""),
    devServer: {
      compress: true,
      hot: true
    },
    entry: {
      app: "./src/main.js"
    },
    optimization:{
        minimize: false
    },
    resolve: {
      modules: ["src/libs", "node_modules"],
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        IS_DEVELOPMENT: process.env.NODE_ENV === "development",
        IS_PRODUCTION_SBS: process.env.NODE_ENV === "production-sbs",
        IS_PRODUCTION: process.env.NODE_ENV === "production"
      }),
      new webpack.ProvidePlugin({
        mapGetters: ["vuex", "mapGetters"],
        mapActions: ["vuex", "mapActions"],
        mapMutations: ["vuex", "mapMutations"],
        mapState: ["vuex", "mapState"]
      }),
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        inject: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          loader: "file-loader"
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          include: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules/webpack-dev-server/client")
          ]
        }
      ]
    }
  },
  css: {
    loaderOptions: {
      css: {
        localIdentName: isProduction
          ? "[hash:base64:5]"
          : "[name]__[local]--[hash:base64:5]",
        camelCase: "only"
      },
      sass: {
        data: `@import "@styles/_mixins.scss";`
      }
    }
  }
};
