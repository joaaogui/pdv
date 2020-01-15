<template>
  <v-app>
    <RightSidebar v-if="rightSidebar"/>
    <LeftSidebar v-if="leftSidebar"/>
    <Navbar/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Footer from './components/Footer'
  import RightSidebar from './components/RightSidebar'
  import LeftSidebar from './components/LeftSidebar'
  import Navbar from './components/Navbar'

  export default {
    name: 'App',
    components: {
      Footer,
      RightSidebar,
      LeftSidebar,
      Navbar,
    },
    computed: {
      rightSidebar() {
        return this.$store.getters.rightSidebar
      },
      leftSidebar() {
        return this.$store.getters.leftSidebar
      }
    },
  }
</script>
