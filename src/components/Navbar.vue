<template>
  <div>
    <v-app-bar app height="90px" color="#343d63">
      <v-app-bar-nav-icon color="white" @click="toggleLeftSidebar"/>
      <v-btn @click="toggleRightSidebar" icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
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

<style scoped>
  .navbar {
    height: 89px;
    background-color: #343d63;
  }
</style>
