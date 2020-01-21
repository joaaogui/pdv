<template>
  <v-bottom-navigation class="footer" app height="90">
    <div class="footer-buttons">
      <div v-for="(shortcut, i) in shortcuts" :key="i" class="footer-button centered-container">
        <v-btn height="90" width="125" :to="shortcut.path" active-class="footer-button-active">
          <span class="icon-text">{{shortcut.text}}</span>
          <v-icon large text-center>{{shortcut.icon}}</v-icon>
        </v-btn>
      </div>
    </div>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      shortcuts: [
        {text: 'Mesas', icon: 'mdi-table-chair', path: '/tables'},
        {text: 'Menu', icon: 'mdi-book-open-page-variant', path: '/menu'},
        {text: 'Pedidos', icon: 'mdi-clipboard-list', path: '/orders'}
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
    margin-right: 60px;
  }

  .footer-button-active {
    border-top: #003cff 2px solid;
  }

  .footer {
    display: inherit;
    justify-content: left !important;
    height: 100%;
  }

  .icon-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
</style>
