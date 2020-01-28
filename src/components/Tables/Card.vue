<template>
  <v-card @click="changeActiveTable" v-on="on" :class="activeCard ? 'active-card' : 'card'" :ripple="false">
    <TimeCard/>
    <div class="main-content">
      {{card}}
    </div>
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
    },
    computed: {
      activeTable() {
        return this.$store.getters.activeTable
      },
      activeCard() {
        return this.$store.getters.activeTable === this.card.toString()
      }
    },
    methods: {
      changeActiveTable() {
        this.$store.commit('changeActiveTable', this.card.toString())
      },
    }
  }
</script>
<style scoped lang="scss">
  .main-content {
    font-size: $card-table-main-content-font-size;
    font-weight: $card-table-main-content-font-weight;
    text-align: $card-table-main-content-text-align;
    padding-top: 38%;
  }

  .footer {
    font-size: $card-table-footer-font-size;
    font-weight: 500;
    display: block;
    margin-left: 45px;
    margin-top: 10px;
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
    color: $right-sidebar-text-color
  }

  .active-card {
    height: $table-card-size;
    width: $table-card-size;
    background-color: transparent;
    border: none;
    box-shadow: none;
    background-size: cover;
    position: relative;
    margin-top: $table-card-margin;
    margin-right: $table-card-margin;
    background-image: url("../../assets/Images/BlueTable.svg");
    color: white;
  }
</style>
