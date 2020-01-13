<template>
  <div>
    <b-navbar toggleable="lg" class="navbar">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <v-btn
        color="pink"
        dark
        @click="toggleRightSidebar"
      >
        Toggle
      </v-btn>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      }
    }
  }
</script>

<style scoped>
  .navbar {
    height: 89px;
    background-color: #343d63;
  }
</style>
