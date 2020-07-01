const path = require("path");

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
    progress: false, //将运行进度输出到控制台。
  },
  pluginOptions:{
    // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "src/styles/_variables.scss"),
        path.resolve(__dirname, "src/styles/_mixins.scss"),
      ],
    }
  }
};
