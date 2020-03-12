<template>
  <div class="open-sidebar-content">
    <div class="upper-text mb-7">
      Deseja realizar o pagamento ?
    </div>
    <div class="buttons">
      <div
        @click="toggleContentOverlay"
        class="cancel-button centered-container mr-3"
      >
        Cancelar
      </div>
      <div
        @click="goTo"
        class="confirm-button centered-container"
      >
        Confirmar Pagamento
      </div>
    </div>
    <div class="bottom-text mt-7">
      Os produtos em andamento neste pedido ainda aparecerão na lista de entrega.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaymentConfirmation',
    methods: {
      goTo () {
        this.toggleContentOverlay()
        this.$router.push({ path: `/payment-confirmed` })
      },
      toggleRightSidebar () {
        this.$store.commit('toggleRightSidebar')
      },
      toggleContentOverlay () {
        this.$store.commit('toggleContentOverlay')
      }
    }
  }
</script>

<style scoped lang="scss">
  .upper-text {
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }

  .cancel-button {
    color: white;
    background-color: lightgrey;
    padding: 15px;
    height: 85px;
    width: 100%;
    border-radius: $navbar-border-radius;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  .confirm-button {
    color: white;
    background-color: $pastel-green;
    padding: 15px;
    height: 85px;
    width: 100%;
    border-radius: $navbar-border-radius;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  .bottom-text {
    padding-left: 20%;
    padding-right: 20%;
    text-align: center;
    font-weight: 500;
    color: white;
  }

  .buttons {
    display: flex;
  }
</style>
