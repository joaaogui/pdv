<template>
  <v-card v-on="on" class="card" :ripple="false">
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
      on: Object
    }
  }
</script>
<style scoped lang="scss">
  .main-content {
    font-size: $card-table-main-content-font-size;
    font-weight: $card-table-main-content-font-weight;
    text-align: $card-table-main-content-text-align;
    padding-top: 40%;
  }

  .footer {
    font-size: $card-table-footer-font-size;
    font-weight: 500;
    display: block;
    margin-left: 45px;
  }

  .card {
    height: $table-card-size;
    width: $table-card-size;
    background-color: transparent;
    border: none;
    box-shadow: none;
    background-size: cover;
    position: relative;
    margin-top: $table-card-margin;
    margin-right: $table-card-margin;
    background-image: url("../../assets/Images/Table.svg");
  }
</style>
