<template>
  <div class="bottom-content">
    <!--    <div>-->
    <!--      <v-row no-gutters class="bottom-content-lines">-->
    <!--        <v-col cols="8">Consumação Total Da Mesa:</v-col>-->
    <!--        <v-col class="bottom-content-values" cols="4">R$ 189,60</v-col>-->
    <!--      </v-row>-->
    <!--      <v-row no-gutters class="bottom-content-lines">-->
    <!--        <v-col cols="8">Taxas:</v-col>-->
    <!--        <v-col class="bottom-content-values" cols="4">R$ 19,60</v-col>-->
    <!--      </v-row>-->
    <!--    </div>-->
    <!--    <div @click="toggleRightSidebar" v-if="app" class="blue-button vertically-centered-container" :class="app ? 'app-button' : ''">-->
    <!--      <v-row>-->
    <!--        <v-col v-if="app" cols="7">-->
    <!--          Pagar App-->
    <!--        </v-col>-->
    <!--        <v-col v-else cols="7">-->
    <!--          Pagar Mesa-->
    <!--        </v-col>-->
    <!--        <v-col v-if="totalSpending" class="bottom-content-values centered-container" cols="5">-->
    <!--         R$ {{totalSpending | money}}-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <!--    </div>-->
  </div>
</template>
<script>
  export default {
    name: 'BottomContent',
    props: {
      app: Number
    },
    computed: {
      table () {
        return this.$store.state.table
      }
    },
    methods: {
      toggleRightSidebar () {
        this.$store.commit('toggleRightSidebar')
      }
    }
  }
</script>
<style scoped lang="scss">
  .bottom-content {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
  }

  .app-button {
    background-color: $onearby-dark-blue;
  }
</style>
