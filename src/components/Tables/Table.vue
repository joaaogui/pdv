<template>
  <v-card @click="changeActiveTable" v-on="on" :class="activeCard ? 'active-card' : 'card'" :ripple="false">
    <TimeCard :duration="table.duration"/>
    <div class="main-content">
      {{table.number}}
    </div>
    <div class="footer">
      {{table.itens}} itens
      <br>
      {{table.orders}} pedidos
    </div>
  </v-card>
</template>
<script>
  import TimeCard from './TimeCard'

  export default {
    name: 'Card',
    components: {TimeCard},
    props: {
      table: Object,
      on: Object
    },
    computed: {
      activeTable() {
        return this.$store.state.activeTable
      },
      activeCard() {
        return this.$store.state.activeTable === this.table.id.toString()
      }
    },
    methods: {
      changeActiveTable() {
        if (this.table.id.toString() === this.activeTable){
          this.$store.commit('changeActiveTable', '')
        } else {
          this.$store.commit('changeActiveTable', this.table.id.toString())
        }
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
