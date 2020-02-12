<template>
  <v-card v-if="backButton" @click="goTo" class="card centered-container">
    <v-icon x-large>mdi-plus</v-icon>
  </v-card>
  <v-card v-else class="card">
    <div class="header">
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
    </div>
    <v-card-text class="main-content pl-0">
      #{{order.number}}
    </v-card-text>
    <div class="footer vertically-centered-container">
      <v-icon :color="iconColor">mdi-table-chair</v-icon>
      {{order.tables}}
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
      }
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

  .main-content {
    font-size: 2em;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: $right-sidebar-text-color !important;
  }

  .footer {
    text-align: left;
    height: 50%;
    font-size: 1.375em;
    font-weight: bold;
    padding-top: 0;
    color: $right-sidebar-text-color !important;
  }
</style>
