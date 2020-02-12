<template>
  <div>
    <v-card v-if="backButton" @click="goTo" class="card centered-container">
      <v-icon large>mdi-arrow-left</v-icon>
    </v-card>
    <v-card @click="addToOrder" class="card">
      <div class="header">
        {{categoryName}}
      </div>
      <v-card-text class="main-content">
        {{item.name}}
      </v-card-text>
      <div class="footer">
        R$ {{item.price}}
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      backButton: Boolean,
      item: Object,
      categoryName: String
    },

    methods: {
      goTo() {
        this.$router.go(-1)
      },
      addToOrder() {
        this.$store.commit('addItem', this.item)
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    height: $menu-card-size;
    width: $menu-card-size;
    margin-top: $menu-card-margin;
    margin-right: $submenu-card-margin;
    border-radius: 10px !important;
    padding: 10px;
  }

  .header {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: #aeb1b8;
  }

  .main-content {
    color: $right-sidebar-text-color !important;
    text-align: center;
    font-weight: 500;
    font-size: 1.4em;
    padding-top: 25%;
    padding-bottom: 30%;
  }

  .footer {
    text-align: center;
    font-size: 1em;
    color: $right-sidebar-text-color;
  }
</style>
