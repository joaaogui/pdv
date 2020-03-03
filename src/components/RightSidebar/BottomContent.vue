<template>
  <div class="bottom-content">
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="7">Subtotal</v-col>
      <v-col class="bottom-content-values" cols="5">R$ {{itensPrice | money}}</v-col>
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
    <div @click="sendOrder" class="mb-2 blue-overlay-button vertically-centered-container">
      <v-row>
        <v-col cols="7">
          Enviar Pedido
        </v-col>
        <v-col class="bottom-content-values" cols="5">
          R$ {{totalPrice | money}}
        </v-col>
      </v-row>
    </div>
    <div @click="payOrder" class="blue-button mb-2 vertically-centered-container">
      <v-row>
        <v-col cols="6">
          Pagar Pedido
        </v-col>
        <v-col class="bottom-content-values" cols="6">
          R$ {{totalPrice | money}}
        </v-col>
      </v-row>
    </div>
    <div @click="sendOrder" class="blue-button centered-container">
      <v-row>
        <div class="horizontally-centered-element">
          Adicionar a Pedido
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
  import PaymentConfirmation from "../PaymentConfirmation"
  import {sendOrder} from '@/api/orders'

  export default {
    name: 'BottomContent',
    components: {PaymentConfirmation},
    data: () => ({
      tip: '',
      discount: ''
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
      },
      itens() {
        return this.$store.state.itens
      },
      orderName() {
        return this.$store.state.order.name
      },
      table() {
        return this.$store.state.table
      },
      establishment() {
        return this.$store.state.establishment
      }
    },
    methods: {

      async sendOrder() {
        try {
          let order = {
            cardId: null,
            valorCompilado: this.totalPrice,
            mesa: this.table.number,
            origemPedido: 1,
            produtos: this.itens,
          }
          let result = await sendOrder(this.establishment.id, order)
          console.log(result)
        } catch (error) {
          console.log(error)
        }
      },
      payOrder() {
        this.toggleRightSidebar()
      },
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
