<template>
  <div class="pt-3 orders-list">
    <v-row @click="newOrder" v-if="!app" no-gutters class="centered-container order">
      <v-icon>mdi-plus</v-icon>
    </v-row>
    <div v-for="(order, index) in orders" :key="index">
      <v-row @click="changeOrder(order)" no-gutters class="vertically-centered-container"
             :class="isActiveOrder(order.id) ? 'active-order' : 'order'">
        <v-col class="ma-0 pa-0" cols="2">
          <v-avatar size="40" color="grey">
            <v-icon v-if="!app" dark size="32">mdi-account</v-icon>
            <img v-else
                 src="../../../assets/Images/icon.png"
            >
          </v-avatar>
        </v-col>

        <v-col class="pl-2" :class="isActiveOrder(order.id) ? 'white-order-text' : 'order-text'" cols="8">
          <v-badge offset-x="-1"
                   offset-y="-1" color="green" dot
          >
            #{{order.number}}
          </v-badge>
        </v-col>
        <v-col class="order-action ma-0 pa-0" cols="2">
          <v-icon large v-if="isActiveOrder(order.id)" color="white">mdi-chevron-left</v-icon>
          <v-icon large v-else :color="rightSidebarTextColor">mdi-chevron-right</v-icon>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
  import variables from '../../../scss/variables.scss'
  import {getTableOrders} from "@/api/tables"

  export default {
    name: 'Orders',
    data: () => ({
      rightSidebarTextColor: variables.rightSidebarTextColor,
      orders: [],
    }),
    props: {
      app: Boolean
    },
    computed: {
      tableId() {
        return this.$store.state.table.id
      },
      rightSidebar() {
        return this.$store.state.rightSidebar
      }
    },
    created() {
      this.getTableOrders()
    },
    methods: {
      async getTableOrders() {
        try {
          let orders = await getTableOrders(this.tableId)
          if (this.app) {
            this.orders = orders.data.data.filter(order => order.origin === 'app')
          } else {
            this.orders = orders.data.data.filter(order => order.origin === 'restaurant')
          }
        } catch (error) {
          console.log(error)
        }
      },
      newOrder() {
        this.$store.commit('startNewOrder')
        this.$router.push('/pdv/menu')
      },
      changeOrder(order) {
        this.$store.commit('changeOrder', order)
        this.$store.dispatch("getOrderItens", order.id)

        if (!this.rightSidebar) {
          this.toggleRightSidebar()
        }
      },
      isActiveOrder(orderId) {
        return this.$store.state.order.id === orderId
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
    overflow: auto;
    padding: 5px;
  }

</style>
