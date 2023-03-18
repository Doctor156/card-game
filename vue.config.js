const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    config.module
        .rule('vue')
        .use('vue-loader');
    config.module
        .rule('ts')
        .use('ts-loader')
        .tap(options => {
          // изменение настроек...
          return options
        })
  },
})
