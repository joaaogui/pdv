<template>
  <v-app>
    <v-content class="pa-0">
      <v-container
        fluid
        class="ma-0 pa-0 app container"
      >
        <snackbar/>
        <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import snackbar from '@/components/Snackbar'

  export default {
    components: {
      snackbar
    }
  }
</script>

<style lang="scss">
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    height: 100%;
  }
</style>
