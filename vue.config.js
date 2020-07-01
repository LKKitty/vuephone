const path = require("path");
var autoprefixer = require("autoprefixer");

const devServerPort = process.env.DEV_PORT; //开发端口
module.exports = {
  publicPath: process.env.VUE_APP_BASE_PATH, //部署应用包时的基本 URL。
  lintOnSave: process.env.NODE_ENV === "development", //设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  productionSourceMap: false,
  devServer: {
    port: devServerPort,
    open: true, //自动打开浏览器
    overlay: {
      //出现编译器错误或警告时，在浏览器中显示全屏覆盖。
      warnings: true,
      errors: true
    },
    progress: false //将运行进度输出到控制台。
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        //加上自己的文件路径，不能使用别名
        path.resolve(__dirname, "src/styles/_variables.scss")
      ]
    }
  },
  chainWebpack(config) {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set("name", process.env.VUE_APP_TITLE);

    // https://webpack.js.org/configuration/devtool/#development
    config.when(process.env.NODE_ENV === "development", config =>
      config.devtool("cheap-eval-source-map")
    );

    // remove vue-cli-service's progress output
    config.plugins.delete("progress");
    // replace with another progress output plugin to solve the this bug:
    // https://github.com/vuejs/vue-cli/issues/4557
    config
      .plugin("simple-progress-webpack-plugin")
      .use(require.resolve("simple-progress-webpack-plugin"), [
        {
          format: "compact"
        }
      ]);
    config.when(process.env.NODE_ENV !== "development", config => {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // only package third parties that are initially dependent
          },
          commons: {
            name: "chunk-commons",
            test: path.resolve(__dirname, "src/components"),
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      config.optimization.runtimeChunk("single");
    });
  }
};
