<template>
  <v-navigation-drawer
    fixed
    :right="true"
    app
  >
    <v-btn @click="toggleRightSidebar" icon>
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Sidebar',
    methods: {
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      }
    }
  }
</script>

<style scoped>

</style>
