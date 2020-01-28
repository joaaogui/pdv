<template>
  <div class="bottom-content">
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="8">Subtotal</v-col>
      <v-col class="bottom-content-values" cols="4">R$ 199,60</v-col>
    </v-row>
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="8">Taxa de serviço (10%)</v-col>
      <v-col class="bottom-content-values" cols="4">R$ 19,60</v-col>
    </v-row>
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="8">Couvert Artístico</v-col>
      <v-col class="bottom-content-values" cols="4">- 3 +</v-col>
    </v-row>
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="8">Desconto</v-col>
      <v-col class="bottom-content-values" cols="4">R$ 1,60</v-col>
    </v-row>

    <div @click="toggleRightSidebar" class="mb-2 end-order-button centered-container">
      Finalizar Pedido
    </div>

    <div @click="toggleRightSidebar" class="bottom-button vertically-centered-container">
      <v-row>
        <v-col cols="7">
          Fechar Conta
        </v-col>
        <v-col class="bottom-content-values" cols="5">
          R$ 299,60
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BottomContent',
    methods: {
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      }
    }
  }
</script>

<style lang="scss">
  .end-order-button {
    border: 2px solid $strong-blue;
    padding: 15px;
    height: 65px;
    color: $strong-blue;
    background-color: white;
    border-radius: $navbar-border-radius;
    font-size: 1.125em;
    font-weight: bold;
    cursor: pointer;
    padding-left: 25px;
    padding-right: 25px;
  }
</style>
