/**
 * vue.config.js
 * https://cli.vuejs.org/zh/config/
 */

// 设置一个比较大的值，确保资源都被打包进去了
const urlConfig = {
  limit: 9999999
}

const vueConfig = {
  css: {
    extract: false,
    loaderOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    // 获取当前运行的脚本名称
    const cmd = process.env.npm_lifecycle_event

    // 如果是打包组件，将静态资源也全部打包到 js 中
    if (cmd === 'build:lib') {
      // 将字体文件打包到代码中
      config.module
        .rule('fonts')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => ({
          ...options,
          ...urlConfig
        }))

      // 将图片打包到代码中
      config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => ({
          ...options,
          ...urlConfig
        }))

      // 将 svg 图片打包到代码中
      const svgRule = config.module.rule('svg')
      // 清除之前存在的配置
      svgRule.uses.clear()
      svgRule
        .use('url-loader')
        .loader('url-loader')
        .options(urlConfig)
    }
  }
}

module.exports = vueConfig
