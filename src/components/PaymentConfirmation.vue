<template>
  <div class="reduced-container">
    <div class="upper-text">Deseja realizar o pagamento ?</div>
    <div class="buttons">
      <div class="cancel-button centered-container mr-2">Cancelar</div>
      <div class="confirm-button centered-container">Confirmar Pagamento</div>
    </div>
    <div class="bottom-text">Os produtos em andamento neste pedido ainda aparecerão na lista de entrega.</div>
  </div>
</template>

<script>
  export default {
    name: "PaymentConfirmation"
  }
</script>

<style scoped lang="scss">
  .upper-text {
    color: white;
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 3%;
    padding-top: 25%;
  }

  .cancel-button {
    color: white;
    background-color: lightgrey;
    padding: 15px;
    height: 85px;
    width: 100%;
    border-radius: $navbar-border-radius;
    font-size: 1.125em;
    font-weight: bold;
    cursor: pointer;
    padding-left: 25px;
    padding-right: 25px;
  }

  .confirm-button {
    color: white;
    background-color: forestgreen;
    padding: 15px;
    height: 85px;
    width: 100%;
    border-radius: $navbar-border-radius;
    font-size: 1.125em;
    font-weight: bold;
    cursor: pointer;
    padding-left: 25px;
    padding-right: 25px;
  }

  .bottom-text {
    padding-left: 40%;
    padding-right: 40%;
    color: white;
    font-size: 1em;
  }

  .buttons {
    display: inline-flex;
    margin-bottom: 3%;
    width: 80%;
  }
</style>
