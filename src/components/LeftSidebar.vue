<template>
  <v-navigation-drawer
    fixed
    app
  >
  <v-btn @click="toggleLeftSidebar" icon>
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'LeftSidebar',
    methods: {
      toggleLeftSidebar() {
        this.$store.commit('toggleLeftSidebar')
      }
    }
  }
</script>

<style scoped>

</style>
