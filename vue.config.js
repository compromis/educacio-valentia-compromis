module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/evc/'
    : '/',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
  }
}
