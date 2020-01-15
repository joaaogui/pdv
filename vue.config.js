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
  }
}
