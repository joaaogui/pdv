module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/variables.scss";`
      }
    }
  },

  pwa: {
    name: 'PDV - Onearby',
    themeColor: '#343d63',
    msTileColor: '#343d63',
    manifestOptions: {
      background_color: '#343d63'
    }
  },

  publicPath: '/'
}
