<template>
  <v-bottom-navigation app height="90">
    <router-link v-for="(shortcut, i) in shortcuts" :key="i" :to="shortcut.path">
    <v-card >
      <v-icon text-center>{{shortcut.icon}}</v-icon>
      <v-card-actions>
        {{shortcut.text}}
      </v-card-actions>
    </v-card>
    </router-link>
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
