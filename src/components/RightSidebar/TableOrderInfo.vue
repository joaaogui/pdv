<template>
  <v-row no-gutters class="table-number-order-container vertically-centered-container">
    <v-col cols="8" class="table-number-order-element">
      <div class="table-number">
        <v-icon large :color="rightSidebarTextColor">mdi-table-chair</v-icon>
        07
      </div>
    </v-col>
    <v-col cols="4">
      <div class="order">
        <v-badge v-if="activeOrder" color="green" dot>
          #{{activeOrder}}
        </v-badge>
      </div>
    </v-col>
  </v-row>
</template>
<script>
  import variables from '../../scss/variables.scss'

  export default {
    name: 'TableOrderInfo',
    data: () => ({
      rightSidebarTextColor: variables.rightSidebartextColor
    }),
    computed: {
      activeOrder() {
        return this.$store.getters.activeOrder
      }
    }
  }
</script>
<style scoped lang="scss">

  .table-number {
    font-size: 26px;
    font-weight: bold;
    color: $right-sidebar-text-color;
  }

  .table-number-order-container {
    height: $navbar-height;
    padding-right: $right-sidebar-padding;
    padding-left: $right-sidebar-padding;
  }

  .table-number-order-element {
    display: flex;
  }

  .order {
    text-align: right;
    margin-left: auto;
    margin-right: 0;
    font-size: 26px;
    font-weight: bold;
    color: $right-sidebar-text-color;
  }

</style>
