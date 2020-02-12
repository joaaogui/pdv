<template>
  <v-app>
    <RightSidebar v-if="rightSidebar"/>
    <LeftSidebar v-if="leftSidebar"/>
    <Navbar/>
    <v-content class="main-app ">
      <v-container fluid class="ma-0 pa-0 container">
        <router-view/>
      </v-container>
      <v-overlay
        :value="contentOverlay"
        opacity="0.7"
      >
        <PaymentConfirmation/>
      </v-overlay>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Footer from './components/Footer'
  import RightSidebar from './components/RightSidebar/RightSidebar'
  import LeftSidebar from './components/LeftSidebar'
  import Navbar from './components/Navbar'
  import PaymentConfirmation from "./components/PaymentConfirmation"

  export default {

    name: 'App',
    components: {
      PaymentConfirmation,
      Footer,
      RightSidebar,
      LeftSidebar,
      Navbar,
    },
    computed: {
      rightSidebar() {
        return this.$store.state.rightSidebar
      },
      leftSidebar() {
        return this.$store.state.leftSidebar
      },
      contentOverlay() {
        return this.$store.state.contentOverlay
      }
    },
    created() {
      this.$store.dispatch("getConfigs")
    }
  }
</script>

<style scoped lang="scss">
  .main-app {
    background-color: #f5f6fa;
  }

  .container {
    height: 100%;
  }
</style>
