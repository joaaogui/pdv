<template>
  <v-navigation-drawer fixed app>
    <v-btn @click="toggleLeftSidebar" icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn @click="logout" icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'LeftSidebar',
    methods: {
      toggleLeftSidebar() {
        this.$store.commit('toggleLeftSidebar')
      },
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>

</style>
