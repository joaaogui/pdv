<template>
  <v-card v-on="on" class="card">
    <TimeCard/>
    <v-card-text class="main-content">
      {{card}}
    </v-card-text>
    <div class="footer">
      21 itens
      <br>
      9 pedidos
    </div>
  </v-card>
</template>
<script>
  import TimeCard from './TimeCard'

  export default {
    name: 'Card',
    components: {TimeCard},
    props: {
      card: Number,
      on: Boolean
    }
  }
</script>
<style scoped lang="scss">
  .main-content {
    font-size: $card-table-main-content-font-size;
    font-weight: $card-table-main-content-font-weight;
    text-align: $card-table-main-content-text-align;
    padding-top: 35%;
  }

  .footer {
    font-size: $card-table-footer-font-size;
    font-weight: 500;
    display: block;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .card {
    height: 125px;
    width: 125px;
    margin: 30px;
    position: relative;
  }

</style>
