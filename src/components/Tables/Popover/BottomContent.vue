<template>
  <div class="bottom-content">
    <div>
      <v-row no-gutters class="bottom-content-lines">
        <v-col cols="8">Consumação Total:</v-col>
        <v-col class="bottom-content-values" cols="4">R$ 189,60</v-col>
      </v-row>
      <v-row no-gutters class="bottom-content-lines">
        <v-col cols="8">Taxas:</v-col>
        <v-col class="bottom-content-values" cols="4">R$ 19,60</v-col>
      </v-row>
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
<style scoped lang="scss">
  .bottom-content {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
  }
</style>
