<template>
  <v-card class="card">
    <div class="header">
      {{item}}
    </div>
    <v-card-text class="main-content">
      Marguerita
    </v-card-text>
    <div class="footer">
      R$ 49,90
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'Card',
    computed: {
      item() {
        return this.$route.params.item
      }
    },
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
    color: $right-sidebar-text-color ;
  }
</style>
