<template>
  <v-container fluid class="popover-container">
    <v-card class="popover-main-card">
      <v-tabs fixed-tabs class="mb-1">
        <v-tab>Restaurante</v-tab>
        <v-tab>App Onearby</v-tab>
      </v-tabs>
      <Orders/>
      <BottomContent/>
    </v-card>
  </v-container>
</template>

<script>
  import BottomContent from './BottomContent'
  import Orders from './Orders'

  export default {
    name: 'Popover',
    components: {Orders, BottomContent},

  }
</script>

<style scoped lang="scss">
  .popover-container {
    width: 400px;
    height: 630px;
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

</style>
