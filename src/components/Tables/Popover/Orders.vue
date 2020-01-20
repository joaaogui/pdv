<template>
  <div class="orders-list">
    <v-row no-gutters class="order vertically-centered-container" v-for="order in orders" :key="order">
      <v-col class="ma-0 pa-0" cols="2">
        <v-avatar color="indigo" size="36">
          <span class="white--text headline">36</span>
        </v-avatar>
      </v-col>
      <v-col class="ma-0 pa-0 order-text" cols="8">#00159</v-col>
      <v-col class="order-action ma-0 pa-0" cols="2">
        <v-icon large :color="rightSidebarTextColor">mdi-chevron-right</v-icon>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import variables from '../../../scss/variables.scss'

  export default {
    name: 'Orders',
    props: {
      orders: Number,
    },
    data: () => ({
      rightSidebartextColor: variables.rightSidebarTextColor,
    }),
  }
</script>
<style scoped lang="scss">
  .order {
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(50, 50, 71, 0.06), 0 4px 4px 0 rgba(50, 50, 71, 0.08);
    height: 64px;
    border-radius: 10px;
  }

  .order-text {
    font-size: 1.375em;
    font-weight: bold;
    color: $right-sidebar-text-color
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
