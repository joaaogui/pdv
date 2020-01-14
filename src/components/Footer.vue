<template>
  <v-bottom-navigation app>
    <v-card v-for="(shortcut, i) in shortcuts" :key="i">
      <v-icon text-center>{{shortcut.icon}}</v-icon>
      <v-card-actions>
        {{shortcut.text}}
      </v-card-actions>
    </v-card>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      shortcuts: [
        {text: 'Mesas', icon: 'mdi-table-chair', path: 'tables'},
        {text: 'Menu', icon: 'mdi-book-open-page-variant', path: 'menu'},
        {text: 'Pedidos', icon: 'mdi-clipboard-list', path: 'orders'}
      ]
    }),
  }
</script>
