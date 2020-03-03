<template>
  <v-row class="menu" :class="rightSidebar ? 'open-sidebar-content' : '' ">
    <v-col class="ma-0 pa-0" cols="auto" v-for="(category, index) in categories" :key="index">
      <Category :category="category"/>
    </v-col>
  </v-row>
</template>

<script>
  import Category from './Category'

  export default {
    name: 'Menu',
    components: {
      Category,
    },
    computed: {
      categories(){
        return this.$store.state.categories
      },
      rightSidebar(){
        return this.$store.state.rightSidebar
      }
    },
    created() {
      this.$store.dispatch("getCategories")
    }
  }
</script>

<style scoped lang="scss">
  .menu {
    padding-left: $main-content-padding;
    margin-bottom: $menu-card-margin;
    margin-left: 0;
  }
</style>
