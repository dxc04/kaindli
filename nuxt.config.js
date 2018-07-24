const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'emquest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Employee Requests Portal' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
      color: '#7fd673',
      height: '2px'
  },
  loadingIndicator: {
      name: 'circle',
      color: '#3B8070',
      background: 'white'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
        new webpack.ProvidePlugin({
          '_': 'lodash'
        })
    ]
  },
  css: [
      '@vuikit/theme/dist/vuikit.min.css',
      {
        src: '~assets/css/main.scss',
        lang: 'scss'
      },
  ],
  plugins: [
      {src: '~plugins/vuikit.js', ssr: true}
  ]
}
