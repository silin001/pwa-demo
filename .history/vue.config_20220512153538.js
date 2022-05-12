// module.exports = {
//   transpileDependencies: true,

// }

// const StatsPlugin = require('stats-webpack-plugin')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')

// eslint-disable-next-line no-unused-vars
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  // lintOnSave: true, // 调试过程中可忽略lint，建议不要忽略
  publicPath: './',
  productionSourceMap: false, // 生产环境不生成sourceMap
  chainWebpack: config => {
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          minChunks: 1,
          test: /node_modules/,
          priority: -10,
          chunks: 'initial'
        },
        common: {}
      }
    })
    // config.resolve.alias
    //   .set('@Components', resolve('./src/components'))
    //   .set('@frameworkComponents', resolve('./src/views/screen/framework/components'))
  },

  // pwa配置
  pwa: {
    name: 'name',
    themeColor: '#6476DB',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: '1.0.0',
    /*
    * 俩个选择:
    * 第一个 GenerateSW ，
    *   此为默认值，
    *   每次build都会自动生成一个service-worker文件，
    *   拥有一些简单的默认配置
    * 第二个 InjectManifest ，
    *   自定义 service-worker 文件的位置（通过 workboxOptions 来配置 sw 文件的位置），
    *   自己对 sw 进行配置。
    * */
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js', // 自定义sw文件的位置
      importWorkboxFrom: 'disabled' // 是否要引入线上的service-worker文件，我们只需要自己定义的文件，不需要谷歌提供的sw文件
    }
  },
  devServer: {
    // host: '192.168.1.122',
    // port: 8080,
    proxy: {
      // '/api': {
      //   // target: 'http://13.1.6.81:8081/api',
      //   // target: 'http://13.1.6.84:8081/api', // 内网测试
      //   target: 'http://1.15.29.59/api', // 外网服务
      //   changeOrigin: true,
      //   secure: false,
      //   ws: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // },

    }
    // https: true
  },
  configureWebpack: {
    // module: {
    //   rules: [{
    //     test: /\.(woff2?|eot|ttf|otf|WOFF2?|ETO|TTF|OTF)(\?.*)?$/,
    //     loader: 'file-loader',
    //     options: {
    //       name: 'fonts/[name].[ext]'
    //       // name (resourcePath, resourceQuery) {
    //       //   // `resourcePath` - `/absolute/path/to/file.js`
    //       //   // `resourceQuery` - `?foo=bar`
    //       //   console.log(resourcePath)
    //       //   console.log(resourceQuery)
    //       //   if (process.env.NODE_ENV === 'development') {
    //       //     return '[path][name].[ext]'
    //       //   }
    //       //   return 'fonts/[name].[ext]'
    //       // }
    //     }
    //   }]
    // },
    plugins: [
      // new StatsPlugin('stats.json', {
      //   chunkModules: true,
      //   chunks: true,
      //   assets: false,
      //   modules: true,
      //   children: true,
      //   chunksSort: true,
      //   assetsSort: true
      // }),
      // new CompressionWebpackPlugin({
      //   algorithm: 'gzip',
      //   test: /\.js$|\.html$|\.css/,
      //   threshold: 10240,
      //   minRatio: 0.8,
      //   deleteOriginalAssets: false // 是否删除源文件
      // })
    ]
  }
}
