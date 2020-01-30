<template>
  <v-row class="submenu">
    <v-col class="ma-0 pa-0" cols="auto" v-for="(item, index) in itens" :key="index">
      <Card :item="item" :backButton="index === 0"/>
    </v-col>
  </v-row>
</template>

<script>
  import Card from './Card'

  export default {
    name: 'Submenu',
    components: {
      Card,
    },
    data: () => ({
      itens: [{id: '1', name: 'Marguerita', price: '50,23'}, {id: '2', name: 'Portuguesa', price: '10,04'}, {id: '3', name: 'Calabresa', price: '102,58'}]
    }),
  }
</script>

<style scoped lang="scss">
  .submenu {
    padding-left: $main-content-padding;
    margin-bottom: $menu-card-margin;
    margin-right: 0;
    margin-left: 0;
  }
</style>
