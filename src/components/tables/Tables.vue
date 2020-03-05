<template>
  <v-row
    v-if="tables"
    class="tables"
    :class="rightSidebar ? 'open-sidebar-content' : ''"
  >
    <v-col
      class="ma-0 pa-0"
      cols="auto"
      v-for="(table, index) in tables"
      :key="index"
    >
      <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        left
        offset-x
      >
        <template v-slot:activator="{ on }">
          <Table
            :table="table"
            :on="on"
          />
        </template>
        <Popover />
      </v-menu>
    </v-col>
  </v-row>
  <div
    class="horizontally-centered-element"
    v-else
    style="font-size: 50px"
  >
    {{error}}
  </div>
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
    data: () => ({
      timeout: null
    }),
    computed: {
      tables () {
        return this.$store.state.tables
      },
      rightSidebar () {
        return this.$store.state.rightSidebar
      },
      error () {
        return this.$store.state.error
      }
    },
    mounted () {
      this.refreshData()
    },
    destroyed () {
      clearTimeout(this.timeout)
    },
    methods: {
      refreshData () {
        let x = 1

        this.$store.dispatch('getTables')

        this.timeout = setTimeout(this.refreshData, x * 1000)
      }
    }

  }
</script>

<style scoped lang="scss">
  .tables {
    padding-left: $main-content-padding;
    margin-bottom: $table-card-margin;
    margin-left: 0;
  }
</style>
