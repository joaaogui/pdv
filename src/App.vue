<template>
  <v-app>
    <Sidebar v-if="rightSidebar"/>
    <Navbar/>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Footer from "./components/Footer"
  import Sidebar from "./components/RightSidebar"
  import Navbar from "./components/Navbar"

  export default {
    name: 'App',
    components: {
      Footer,
      Sidebar,
      Navbar,
    },
    computed: {
      rightSidebar() {
        return this.$store.getters.rightSidebar
      }
    },
  }
</script>
