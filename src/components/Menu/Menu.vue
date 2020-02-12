<template>
  <v-row class="menu">
    <v-col class="ma-0 pa-0" cols="auto" v-for="(category, index) in categories" :key="index">
      <Card :category="category"/>
    </v-col>
  </v-row>
</template>

<script>
  import Card from './Card'

  export default {
    name: 'Menu',
    components: {
      Card,
    },
    computed: {
      categories(){
        return this.$store.state.categories
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
    margin-right: 0;
    margin-left: 0;
  }
</style>
