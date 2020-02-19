<template>
  <v-bottom-navigation class="footer" app height="90">
    <div class="footer-buttons">
      <div v-for="(shortcut, i) in shortcuts" :key="i" class="footer-button centered-container">
        <v-btn :ripple="false" height="90" width="125" :to="shortcut.path" active-class="footer-button-active">
          <span class="icon-text">{{shortcut.text}}</span>
          <v-icon height="20" text-center>{{shortcut.icon}}</v-icon>
        </v-btn>
      </div>
    </div>
  </v-bottom-navigation>
</template>

<script>
  import variables from '@/scss/variables.scss'
  export default {
    name: 'Footer',
    data: () => ({
      deactivatedGray: variables.deactivatedGray,
      shortcuts: [
        {text: 'Mesas', icon: 'mdi-table-chair', path: '/pdv/tables'},
        {text: 'Menu', icon: 'mdi-book-open-page-variant', path: '/pdv/menu'},
        {text: 'Pedidos', icon: 'mdi-clipboard-list', path: '/pdv/orders'}
      ]
    }),
  }
</script>

<style scoped lang="scss">
  .footer-buttons {
    margin-left: $main-content-padding;
    display: flex;
  }

  .footer-button {
    width: $table-card-size;
  }

  .footer-button-active {
    border-top: $strong-blue 2px solid;
  }

  .footer {
    display: inherit;
    justify-content: left !important;
    height: 100%;
  }

  .icon-text {
    font-size: 1.375em;
    font-weight: 500;
    line-height: 1.38;
  }
</style>
