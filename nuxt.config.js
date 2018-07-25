module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '辰本貴通のポートフォリオ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,200,300,400,900' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    theme: {
      primary: '#343434',
      secondary:'#ECEBEB',
      accent: '#76D2CA',
      success: '#00d20a',
      info: '#2196f3',
      error: '#b71c1c'
    }
  },
  css: [
        '@fortawesome/fontawesome-free-webfonts',
        '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
        '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
        '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],
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
    }
  },
  router: {
    base: '/portfolio/'
  }
}
