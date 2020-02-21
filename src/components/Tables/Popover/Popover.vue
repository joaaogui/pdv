<template>
  <v-container fluid class="popover-container">
    <v-card class="popover-main-card">
      <v-tabs v-model="tab" fixed-tabs class="mb-1">
        <v-tab>Restaurante</v-tab>
        <v-tab>App Onearby</v-tab>
        <v-tab-item>
          <Orders class="orders" :app="false"/>
        </v-tab-item>
        <v-tab-item>
          <Orders class="orders" :app="true"/>
        </v-tab-item>
      </v-tabs>
      <BottomContent :app="tab"/>
    </v-card>
  </v-container>
</template>

<script>
  import BottomContent from './BottomContent'
  import Orders from './Orders'

  export default {
    name: 'Popover',
    components: {Orders, BottomContent},
    data: () => ({
      tab: null,
    }),

  }
</script>

<style scoped lang="scss">
  .popover-container {
    width: 400px;
    height: $popover-height;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 15px;
    z-index: 1;
  }

  .popover-main-card {
    position: relative;
    height: 100%;
    box-shadow: none;
  }

  .orders {
    max-height: $popover-orders-height;
    overflow: auto;
    padding: 5px;
  }
</style>
