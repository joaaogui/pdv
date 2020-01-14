<template>
  <v-navigation-drawer
    :value="leftSidebar"
    fixed
    app
  />
</template>

<script>
  export default {
    name: 'LeftSidebar',
    computed: {
      leftSidebar() {
        return this.$store.getters.leftSidebar
      }
    },
  }
</script>

<style scoped>

</style>
