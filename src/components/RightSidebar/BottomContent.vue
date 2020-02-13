<template>
  <div class="bottom-content">
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="8">Subtotal</v-col>
      <v-col class="bottom-content-values" cols="4">R$ {{itensPrice | money}}</v-col>
    </v-row>
    <v-row no-gutters class="bottom-content-lines pb-0">

      <v-col cols="5">
        Taxa de serviço
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="tip"
          class="mt-0"
          dense
          height="21"
          color="blue"
          suffix="%"
          @keyup="setTip"
        />
      </v-col>
      <v-col class="bottom-content-values" cols="5">R$ {{tipValue | money}}</v-col>
    </v-row>
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="8">Couvert Artístico</v-col>
      <v-col class="bottom-content-values" cols="4">
        <v-icon @click="removeCouvert">mdi-minus</v-icon>
        {{couvertAmount}}
        <v-icon @click="addCouvert" color="blue">mdi-plus</v-icon>
      </v-col>
    </v-row>
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="8">Desconto</v-col>
      <v-col class="bottom-content-values" cols="4">
        <v-text-field
          v-model="discount"
          class="mt-0"
          dense
          height="21"
          color="blue"
          prefix="R$"
          @keyup="setDiscount"
        />
      </v-col>
    </v-row>
    <div @click="toggleContentOverlay" class="mb-2 blue-overlay-button centered-container">
      Finalizar Pedido
    </div>

    <div @click="toggleRightSidebar" class="blue-button vertically-centered-container">
      <v-row>
        <v-col cols="6">
          Fechar Conta
        </v-col>
        <v-col class="bottom-content-values" cols="6">
          R$ {{totalPrice | money}}
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
    data: () => ({
      tip: '',
      discount: '12,90'
    }),
    created() {
      this.tip = this.tipPercentage
      this.discount = this.discountValue
    },
    computed: {
      contentOverlay() {
        return this.$store.state.contentoverlay
      },
      itensPrice() {
        return this.$store.getters.itensPrice
      },
      tipValue() {
        return this.$store.getters.tipValue
      },
      tipPercentage() {
        return this.$store.state.tipPercentage
      },
      couvertAmount() {
        return this.$store.state.couvertAmount
      },
      discountValue() {
        return this.$store.state.discount
      },
      totalPrice() {
        return this.$store.getters.totalPrice
      }
    },
    methods: {
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      },
      toggleContentOverlay() {
        this.$store.commit('toggleContentOverlay')
      },
      addCouvert() {
        this.$store.commit('addCouvert')
      },
      removeCouvert() {
        this.$store.commit('removeCouvert')
      },
      setTip() {
        this.$store.commit('setTip', this.tip)
      },
      setDiscount() {
        this.$store.commit('setDiscount', this.discount)
      }
    }
  }
</script>
