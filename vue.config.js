module.exports = {

  publicPath: process.env.NODE_ENV === 'production'
  ? '/vueJsToturials/' : '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
