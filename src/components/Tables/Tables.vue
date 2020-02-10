<template>
  <v-row class="tables">
    <v-col class="ma-0 pa-0" cols="auto" v-for="(table, index) in tables" :key="index">
      <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        left
        offset-x
      >
        <template v-slot:activator="{ on }">
          <Table :table="table" :on="on"/>
        </template>
        <Popover/>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
  import Popover from './Popover/Popover'
  import Table from './Table'

  export default {
    name: 'Tables',
    components: {
      Table,
      Popover
    },
    computed: {
      tables() {
        return this.$store.state.tables
      }
    },
    beforeCreate: function () {
      this.$store.dispatch("getTables")
    }
  }
</script>

<style scoped lang="scss">
  .tables {
    padding-left: $main-content-padding;
    margin-bottom: $table-card-margin;
    margin-right: 0;
    margin-left: 0;
  }
</style>
