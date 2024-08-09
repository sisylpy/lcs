
const webpack = require("webpack")

module.exports = {
  // configureWebpack:(config) => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //     config.mode = 'production'
  //   } else {
  //     // 为开发环境修改配置...
  //     config.mode = 'development'
  //   }
  //
  //   // 开发生产共同配置别名
  //   Object.assign(config.resolve, {
  //     alias: {
  //       '@': path.resolve(__dirname, './src'),
  //       'assets': path.resolve(__dirname, './src/assets'),
  //       'common': path.resolve(__dirname, './src/common'),
  //       'components': path.resolve(__dirname, './src/components'),
  //       'network': path.resolve(__dirname, './src/network'),
  //       'configs': path.resolve(__dirname, './src/configs'),
  //       'views': path.resolve(__dirname, './src/views'),
  //       'plugins': path.resolve(__dirname, './src/plugins'),
  //     }
  //   })
  // },


  // 配置插件参数
  configureWebpack: {

    resolve: {
      alias: {
        'assets': "@/assets",
        'common': "@/common",
        'components': "@/components",
        'network': "@/network",
        'views': "@/views",
      }
    },
    plugins: [
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      }),
    ]
  }
}


