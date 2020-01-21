<template>
  <v-row class="orders">
    <v-col class="ma-0 pa-0" cols="auto" v-for="(card, i) in cards" :key="card">
      <Card :card="card" :backButton="i === 0"/>
    </v-col>
  </v-row>
</template>

<script>
  import Card from './Card'

  export default {
    name: 'Orders',
    components: {
      Card,
    },
    data: () => ({
      cards: [...Array(50).keys()]
    }),
  }
</script>

<style scoped lang="scss">
  .orders {
    padding-left: $main-content-padding;
    margin-bottom: $menu-card-margin;
    margin-right: 0;
    margin-left: 0;
  }
</style>
