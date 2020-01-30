<template>
  <v-row class="menu">
    <v-col class="ma-0 pa-0" cols="auto" v-for="category in categories" :key="category">
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
    data: () => ({
      categories: ['Pizza', 'Bebidas', 'Sobremesas']
    })
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
