<template>
  <v-row no-gutters class="table-number-order-container vertically-centered-container">
    <v-col cols="8" class="table-number-order-element ">
      <div class="table-number vertically-centered-container">
        <v-icon large :color="rightSidebarTextColor">mdi-table-chair</v-icon>
        <span class="ml-1" v-if="activeTable">{{activeTable}}</span>
        <span class="ml-1" v-else>-</span>
      </div>
    </v-col>
    <v-col cols="4">
      <div class="order">
        <v-badge v-if="activeOrderNumber" color="green" dot>
          #{{activeOrderNumber}}
        </v-badge>
        <v-badge v-else color="green" dot>
          # -
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
      activeOrderNumber() {
        return this.$store.state.activeOrder.number
      },
      activeTable() {
        return this.$store.state.activeTable
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
