<template>
  <v-row no-gutters class="table-number-order-container vertically-centered-container">
    <v-col cols="8" class="table-number-order-element ">
      <div class="table-number vertically-centered-container">
        <v-icon large :color="rightSidebarTextColor">mdi-table-chair</v-icon>
        <span class="ml-1" v-if="tableNumber">{{tableNumber}}</span>
        <span class="ml-1" v-else>-</span>
      </div>
    </v-col>
    <v-col cols="4">
      <div class="order" @click="toggleRightSidebar">
        <v-badge v-if="orderNumber" color="green" dot>
          #{{orderNumber}}
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
      orderNumber() {
        return this.$store.state.order.id
      },
      tableNumber() {
        return this.$store.state.table.number
      }
    },
    methods: {
      toggleRightSidebar(){
        this.$store.commit('toggleRightSidebar')
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
    cursor: pointer;
    text-align: right;
    margin-left: auto;
    margin-right: 0;
    font-size: 26px;
    font-weight: bold;
    color: $right-sidebar-text-color;
  }

</style>
