<template>
  <div>
    <v-app-bar app height="90" class="navbar">
      <v-app-bar-nav-icon color="white" @click="toggleLeftSidebar"/>
      <v-btn @click="toggleRightSidebar" icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <div class="new-order-button">Novo pedido</div>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      },
      toggleLeftSidebar() {
        this.$store.commit('toggleLeftSidebar')
      }
    }
  }
</script>

<style scoped lang="scss">
  .navbar {
    background-color: #343d63;
  }

  .new-order-button {
    font-size: 2em;
    width: $rightSidebarWidth;
    background-color: #003cff;
  }
</style>
