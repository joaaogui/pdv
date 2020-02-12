<template>
  <v-row class="orders">
    <v-col class="ma-0 pa-0" cols="auto" v-for="(order, i) in orders" :key="i">
      <Order :order="order" :backButton="i === 0"/>
    </v-col>
  </v-row>
</template>

<script>
  import Order from './Order'

  export default {
    name: 'Orders',
    components: {
      Order,
    },
    computed: {
      orders() {
        return this.$store.state.orders
      }
    },
    created() {
      this.$store.dispatch("getOrders")
    }
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
