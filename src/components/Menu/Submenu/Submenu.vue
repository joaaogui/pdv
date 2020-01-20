<template>
  <v-row class="submenu">
    <v-col class="ma-0 pa-0" cols="auto" v-for="card in cards" :key="card">
      <Card :card="card"/>
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
      cards: [...Array(50).keys()]
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
