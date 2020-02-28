<template>
  <v-card @click="changeTable" v-on="on" :class="isActiveTable ? 'active-card' : 'card'" :ripple="false">
    <TimeCard :duration="table.duration" v-if="!emptyTable"/>
    <div class="main-content">
      {{table.number}}
    </div>
    <div class="footer" v-if="!emptyTable">
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
      tableId() {
        return this.$store.state.table.id
      },
      isActiveTable() {
        return this.$store.state.table.id === this.table.id
      },
      emptyTable() {
        return this.table.itens === 0
      }
    },
    methods: {
      startNewOrder() {
        this.$store.commit('startNewOrder', true)
      },
      changeTable() {
          this.$store.commit('changeTable', this.table)
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
