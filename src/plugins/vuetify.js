import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#000',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
})
