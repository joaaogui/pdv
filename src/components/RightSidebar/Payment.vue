<template>
  <div>
    <div class="payment-text">Forma de pagamento</div>
    <div class="icons horizontally-centered-element centered-container">
      <div class="centered-container" @click="changeActivePaymentForm('phone')" :class="activePaymentForm === 'phone' ? 'active-icon' : 'icon'">
        <v-icon large>mdi-cellphone</v-icon>
      </div>
      <div class="icon centered-container" @click="changeActivePaymentForm('card')" :class="activePaymentForm === 'card' ? 'active-icon' : 'icon'">
        <v-icon large>mdi-credit-card</v-icon>
      </div>
      <div class="icon centered-container" @click="changeActivePaymentForm('cash')" :class="activePaymentForm === 'cash' ? 'active-icon' : 'icon'">
        <v-icon large>mdi-cash</v-icon>
      </div>
    </div>
    <div class="text-box">O cliente será notificado e
      o valor de <b>R$ 226,00</b> será cobrado
      no cartão de crédito.
    </div>
    <div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Payment',
    computed: {
      activePaymentForm() {
        return this.$store.getters.activePaymentForm
      }
    },
    methods: {
      changeActivePaymentForm(paymentForm) {
        this.$store.commit('changeActivePaymentForm', paymentForm)
      }
    }
  }
</script>

<style scoped lang="scss">
  .payment-text {
    margin-left: $right-sidebar-padding;
    margin-bottom: 15px;
    margin-top: 30px;
    font-size: 1em;
    font-weight: 600;
    color: $right-sidebar-text-color
  }

  .icons {
    height: 65px;
    width: 315px;
    border-radius: 10px;
    background-color: #f0efef;
    display: flex;
  }

  .icon {
    width: 98px;
    height: 45px;
    border-radius: 6px;
    background: none;
    cursor: pointer;
  }

  .active-icon {
    width: 98px;
    height: 45px;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(50, 50, 71, 0.06), 0 4px 4px 0 rgba(50, 50, 71, 0.08);
    background-color: #ffffff;
    cursor: pointer;
  }

  .text-box {
    padding-top: 30px;
    padding-left: $right-sidebar-padding;
    padding-right: $right-sidebar-padding;
    text-align: center;
    color: $right-sidebar-text-color
  }
</style>
