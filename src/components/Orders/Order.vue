<template>
  <v-card v-if="backButton" @click="startNewOrder" class="card centered-container">
    <v-icon x-large>mdi-plus</v-icon>
  </v-card>
  <v-card v-else @click="changeOrder" class="card">
    <v-row no-gutters>
      <v-col class="header-text" cols="8">
        <div class="horizontally-centered-element vertically-centered-container">{{order.duration}} min</div>
      </v-col>
      <v-col class="circle horizontally-centered-element" cols="4">
        <v-avatar size="40" :color="orderBadgeColor">
          {{order.itens}}
        </v-avatar>
      </v-col>
    </v-row>
    <v-card-text class="order-name vertically-centered-container pl-0">
      {{order.userName}}
    </v-card-text>
    <div class="footer">
      <v-row no-gutters>
        <v-col cols="8">
          <v-icon :color="iconColor">mdi-table-chair</v-icon>
          {{order.tables}}
        </v-col>
        <v-col class="order-number" cols="4">
          #{{order.id}}
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
  import variables from '@/scss/variables.scss'

  export default {
    name: 'Order',
    props: {
      order: Object,
      backButton: Boolean,
    },
    data: () => ({
      orderBadgeColor: variables.pinkyRed,
      iconColor: variables.rightSidebarTextColor
    }),
    computed: {
      item() {
        return this.$route.params.item
      }
    },
    methods: {
      goTo() {
        this.$router.go(-1)
      },
      startNewOrder() {
        this.$store.commit('startNewOrder', true)
      },
      changeOrder() {
        this.$store.commit('changeOrder', this.order)
        this.$store.dispatch("getOrderItens", this.order.id)
      },
    }
  }
</script>

<style scoped lang="scss">
  .card {
    height: $order-card-height;
    width: $order-card-width;
    margin-top: $menu-card-margin;
    margin-right: $submenu-card-margin;
    border-radius: 10px !important;
    padding: 15px;
    position: relative;
  }


  .header-text {
    font-size: 1.125em;
    font-weight: 600;
    color: $pinky-red;
  }

  .circle {
    font-size: 1.3em;
    font-weight: bold;
    color: white;
    text-align: right;
  }

  .order-name {
    font-size: 1.375em;
    font-weight: bold;
    color: $right-sidebar-text-color !important;
    height: 60%;
  }

  .order-number {
    text-align: right;
    font-size: 1.125em;
    font-weight: bold;
    color: $right-sidebar-text-color;
  }

  .footer {
    font-size: 1.375em;
    font-weight: bold;
    color: $right-sidebar-text-color !important;
    position: absolute;
    bottom: 0;
    height: 23%;
    width: $order-card-width - 30;
  }
</style>
