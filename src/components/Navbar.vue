<template>
  <div>
    <v-app-bar
      app
      :height="navbarHeight"
      class="navbar"
    >
      <div class="hamburguer-background centered-container">
        <v-app-bar-nav-icon
          x-large
          color="white"
          @click="toggleLeftSidebar"
        />
      </div>
      <div class="ml-4 establishment-name">
        {{ establishment.name }}
      </div>
      <div
        @click="startNewOrder"
        class="new-order-button centered-container"
      >
        <div class="text">
          Novo pedido
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
  import variables from '../scss/variables.scss'

  export default {
    name: 'Navbar',
    data: () => ({
      navbarHeight: variables.navbarHeight
    }),
    computed: {
      establishment () {
        return this.$store.state.establishment
      }
    },
    methods: {
      startNewOrder () {
        let table = {
          id: 0,
          number: 0
        }
        this.$store.commit('changeTable', table)
        this.$store.commit('startNewOrder', true)
      },
      toggleLeftSidebar () {
        this.$store.commit('toggleLeftSidebar')
      }
    }
  }
</script>

<style scoped lang="scss">
  .navbar {
    background-color: $navbar-color;
  }

  .establishment-name {
    color: white;
    font-size: 1.5em;
    font-weight: bold;
  }

  .new-order-button {
    position: absolute;
    right: 0;
    height: 100%;
    font-size: 1.5em;
    width: $right-sidebar-width;
    background-color: #003cff;
    font-weight: bold;
    color: white;
    border-top-left-radius: $navbar-border-radius;
    border-bottom-left-radius: $navbar-border-radius;
    cursor: pointer;
  }

  .v-toolbar__content {
    padding: 0;
  }

  .hamburguer-background {
    height: 100%;
    width: $main-content-padding;
    background-color: #586e98;
    border-top-right-radius: $navbar-border-radius;
    border-bottom-right-radius: $navbar-border-radius;
  }
</style>
