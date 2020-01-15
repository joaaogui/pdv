<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto" v-for="card in cards" :key="card">
        <v-card class="card">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import TimeCard from './TimeCard'

  export default {
    name: 'Cards',
    components: {
      TimeCard
    },
    data: () => ({
      cards: ['01', '02', '03', '04', '05', '11', '72', '33', '44', '75', '231', '22', '343', '21', '105', '12', '32', '13', '43', '53', '91', '92', '93', '94', '95',]
    }),
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
