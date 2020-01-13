<template>
  <v-navigation-drawer
    :value="rightSidebar"
    fixed
    :right="true"
    app
  >
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Sidebar',
    computed: {
      sidebar() {
        return this.$store.getters.rightSidebar
      }
    },
  }
</script>

<style scoped>

</style>
