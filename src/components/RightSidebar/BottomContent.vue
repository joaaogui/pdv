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
    <div @click="toggleContentOverlay" class="mb-2 blue-overlay-button centered-container">
      Finalizar Pedido
    </div>

    <div @click="toggleRightSidebar" class="blue-button vertically-centered-container">
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
  import PaymentConfirmation from "../PaymentConfirmation"

  export default {
    name: 'BottomContent',
    components: {PaymentConfirmation},
    computed: {
      contentOverlay() {
        return this.$store.getters.contentoverlay
      }
    },
    methods: {
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      },
      toggleContentOverlay() {
        this.$store.commit('toggleContentOverlay')
      }
    }
  }
</script>
