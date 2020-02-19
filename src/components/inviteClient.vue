<template>
  <div class="open-sidebar-content">
    <div class="testing-border modal">

    </div>
  </div>
</template>

<script>
  export default {
    name: "PaymentConfirmation",
    methods: {
      goTo() {
        this.toggleContentOverlay()
        this.$router.push({path: `/payment-confirmed`})
      },
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      },
      toggleContentOverlay() {
        this.$store.commit('toggleContentOverlay')
      }
    }
  }
</script>

<style scoped lang="scss">
  .modal {
    height: 50%;
    width: 50%;

  }
</style>
