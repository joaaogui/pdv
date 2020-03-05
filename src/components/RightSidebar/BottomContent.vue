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
<!--    <v-row no-gutters class="bottom-content-lines">-->
<!--      <v-col cols="8">Couvert Artístico</v-col>-->
<!--      <v-col class="bottom-content-values" cols="4">-->
<!--        <v-icon @click="removeCouvert">mdi-minus</v-icon>-->
<!--        {{couvertAmount}}-->
<!--        <v-icon @click="addCouvert" color="blue">mdi-plus</v-icon>-->
<!--      </v-col>-->
<!--    </v-row>-->
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
    <div @click="sendOrder" v-if="status === 'newOrder'" class="mb-2 blue-overlay-button vertically-centered-container">
      <v-row>
        <v-col cols="7">
          Enviar Pedido
        </v-col>
        <v-col class="bottom-content-values" cols="5">
          R$ {{totalPrice | money}}
        </v-col>
      </v-row>
    </div>
    <div @click="addToOrder" v-if="status === 'existingOrder'" class="mb-2 blue-button centered-container">
      <v-row>
        <div class="horizontally-centered-element">
          Adicionar Itens a Pedido
        </div>
      </v-row>
    </div>
    <div @click="payOrder" v-if="status === 'existingOrder' || status === 'newOrder'"
         class="blue-button mb-2 vertically-centered-container">
      <v-row>
        <v-col cols="6">
          Pagar Pedido
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
  import {sendOrder, payOrder} from '@/api/orders'
  import swal from 'sweetalert2'

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
      status() {
        return this.$store.state.status
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
        return this.$store.state.order
      },
      table() {
        return this.$store.state.table
      },
      order() {
        return this.$store.state.order
      },
      establishment() {
        return this.$store.state.establishment
      }
    },
    methods: {
      async sendOrder() {
        if (this.itens.length !== 0 && this.orderName) {
          try {
            let products = []
            for (let item of this.itens) {
              products.push({
                id: item.id,
                qnt: 1,
                itens: []
              })
            }
            let order = {
              cardId: null,
              valorCompilado: this.totalPrice,
              mesa: this.table.number,
              origemPedido: 1,
              produtos: products,
              nomeCliente: 'TESTE DO PDV'
            }
            let result = await sendOrder(this.establishment.id, order)
            if (result.data.success) {
              this.toggleRightSidebar()
              swal.fire({
                icon: 'success',
                title: 'Pedido enviado com sucesso!',
              })
            } else {
              swal.fire({
                icon: 'error',
                title: result.data.message,
              })
            }
          } catch (error) {
            swal.fire({
              icon: 'error',
              title: error.message,
            })
          }
        } else {
          swal.fire({
            icon: 'warning',
            title: 'O pedido deve conter algum produto',
          })
        }
      },
      async payOrder() {
        try {
          let order = {
            cardId: null,
            idPedido: this.order.id,
            OrigemCheckout: 1
          }
          let result = await payOrder(this.establishment.id, order)
          if (result.data.success) {
            swal.fire({
              icon: 'success',
              title: 'Pagamento enviado com sucesso!',
            })
          } else {
            console.log(result)
          }
          console.log(result)
          this.toggleRightSidebar()
        } catch (error) {
          swal.fire({
            icon: 'error',
            title: error.message,
          })
        }
      },
      async addToOrder() {
        try {
          let products = []
          let itensToAdd = this.itens.filter(item => !("orderId" in item))
          for (let item of itensToAdd) {
            products.push({
              id: item.id,
              qnt: 1,
              itens: []
            })
          }
          let order = {
            cardId: null,
            valorCompilado: itensToAdd.map(item => item.price * item.amount).reduce((prev, next) => prev + next),
            mesa: this.table.number,
            origemPedido: 1,
            produtos: products,
            nomeCliente: this.order.userName
          }
          let result = await sendOrder(this.establishment.id, order)
          if (result.data.success) {
            this.toggleRightSidebar()
            swal.fire({
              icon: 'success',
              title: 'Itens adicionados com sucesso!',
            })
          }
        } catch (error) {
          console.log(error.message)

        }

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
