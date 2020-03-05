<template>
  <div class="pdv fill-height">
    <RightSidebar v-if="rightSidebar"/>
    <LeftSidebar v-if="leftSidebar"/>
    <Navbar/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-overlay
      :value="contentOverlay"
      opacity="0.7"
    >
      <PaymentConfirmation/>
    </v-overlay>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '../components/Footer'
  import RightSidebar from '../components/rightSidebar/RightSidebar'
  import LeftSidebar from '../components/LeftSidebar'
  import Navbar from '../components/Navbar'
  import PaymentConfirmation from '../components/PaymentConfirmation'

  export default {
    name: 'Pdv',
    components: {
      PaymentConfirmation,
      Footer,
      RightSidebar,
      LeftSidebar,
      Navbar
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
    }
    // created() {
    //   this.$store.dispatch("getConfigs")
    // }
  }
</script>

<style scoped lang="scss">
  .pdv {
    background-color: #f5f6fa;
  }
</style>
