<template>
  <div class="pt-3 orders-list">
    <div v-for="(order, index) in orders" :key="order">
      <v-row @click="newOrder" v-if="index===0" no-gutters class="centered-container order">
        <v-icon>mdi-plus</v-icon>
      </v-row>
      <v-row @click="changeActiveOrder(order)" no-gutters class="vertically-centered-container"
             :class="isActiveOrder(order) ? 'active-order' : 'order'">
        <v-col class="ma-0 pa-0" cols="2">
          <v-avatar size="40" color="grey">
            <v-icon dark size="32">mdi-account</v-icon>
          </v-avatar>
        </v-col>

        <v-col class="pl-2" :class="isActiveOrder(order) ? 'white-order-text' : 'order-text'" cols="8">
          <v-badge offset-x="-1"
                   offset-y="-1" color="green" dot
          >
            #{{order}}
          </v-badge>
        </v-col>
        <v-col class="order-action ma-0 pa-0" cols="2">
          <v-icon large v-if="isActiveOrder(order)" color="white">mdi-chevron-left</v-icon>
          <v-icon large v-else :color="rightSidebarTextColor">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
  import variables from '../../../scss/variables.scss'

  export default {
    name: 'Orders',
    data: () => ({
      rightSidebarTextColor: variables.rightSidebarTextColor,
      orders: ['00159', '00160', '00161', '00162', '00163', '00164', '00165'],
    }),
    computed: {
      activeOrder() {
        return this.$store.getters.activeOrder
      },
      rightSidebar() {
        return this.$store.getters.rightSidebar
      }
    },
    methods: {
      newOrder(){
      //  Start new order
        this.$store.commit('changeActiveOrder', '')
      },
      changeActiveOrder(order) {
        this.$store.commit('changeActiveOrder', order.toString())
        if (!this.rightSidebar) {
          this.toggleRightSidebar()
        }
      },
      isActiveOrder(order) {
        return this.$store.getters.activeOrder === order
      },
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      },
    }
  }
</script>
<style scoped lang="scss">
  .order {
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(50, 50, 71, 0.06), 0 4px 4px 0 rgba(50, 50, 71, 0.08);
    height: 64px;
    border-radius: 10px;
    cursor: pointer;
  }

  .add-order {
    width: 100%;
    height: 64px;
  }

  .active-order {
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(50, 50, 71, 0.06), 0 4px 4px 0 rgba(50, 50, 71, 0.08);
    height: 64px;
    border-radius: 10px;
    cursor: pointer;
    background-color: $strong-blue;
  }

  .order-text {
    font-size: 1.375em;
    font-weight: bold;
    color: $right-sidebar-text-color
  }

  .white-order-text {
    font-size: 1.375em;
    font-weight: bold;
    color: white
  }

  .order-action {
    text-align: right;
  }

  .orders-list {
    max-height: 60%;
    overflow: auto;
    padding: 5px;
  }

</style>
