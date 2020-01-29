<template>
  <v-card>
    <v-list flat class="list">
      <v-list-group :ripple="false" flat class="sublist" active-class="active-class">
        <template v-slot:activator>
          <v-avatar size="40" class="mr-3 ml-3 all-item-amount">
            5
          </v-avatar>
          <v-list-item-title class="right-sidebar-list-title">Itens</v-list-item-title>
        </template>
        <div v-for="item in items" :key="item.name">
          <Item :item="item"/>
        </div>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  import Item from "./Item"

  export default {
    name: 'ItemList',
    components: {Item},
    data: () => ({
      items: [
        {name: 'Marguerita', price: '45.80'},
        {name: 'Pizza', price: '15.80'},
        {name: 'Hamburguer', price: '35.30'},
      ]
    }),
  }
</script>

<style scoped>

  .v-list-item--active {
    color: white

  }

  .all-item-amount {
    border: solid 1px #d3d3d3;
    font-size: 1.3em;
  }

  .list {
    width: 100%;
  }

  .sublist {
    max-height: 350px;
    overflow: auto;
  }

  .observation-text {
    font-size: 0.8125em;
    letter-spacing: normal;
    color: #828799;
  }
</style>
