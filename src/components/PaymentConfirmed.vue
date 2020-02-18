<template>
  <div class="open-sidebar-content">
    <div class="confirmation centered-container">
      <div class="upper-text mb-7 ">
        <v-icon class="horizontally-centered-element" size="90" :color="pastelGreen">mdi-check</v-icon>
        <div> Pagamento efetuado com sucesso!</div>
      </div>
    </div>
    <div class="buttons bottom-content">
      <div @click="toggleContentOverlay" class="button blue-overlay-button centered-container mr-3">Enviar nota fiscal</div>
      <div @click="toggleContentOverlay" class="button blue-button centered-container">Finalizar atendimento</div>
    </div>
  </div>
</template>

<script>
  import variables from '@/scss/variables.scss'

  export default {
    name: "PaymentConfirmed",
    data: () => ({
      pastelGreen: variables.pastelGreen,
    })
  }
</script>

<style scoped lang="scss">
  .button {
    height: 90px !important;
  }

  .upper-text {
    font-size: 1.4em;
    font-weight: 600;
    display: block;
    color: #4aa970;
    text-align: center;
  }

  .bottom-text {
    padding-left: 20%;
    padding-right: 20%;
    text-align: center;
    font-weight: 500;
    color: white;
  }

  .confirmation {
    height: 100%;
  }

  .buttons {
    display: flex;
    bottom: 20px;
    padding-right: $right-sidebar-width + 50;
    padding-left: 50px
  }
</style>
