<template>
  <v-row class="tables">
    <v-col class="ma-0 pa-0" cols="auto" v-for="card in cards" :key="card">
      <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        left
        offset-x
      >
        <template v-slot:activator="{ on }">
          <Card :card="card" :on="on"/>
        </template>
        <Popover/>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
  import Popover from './Popover/Popover'
  import Card from './Card'

  export default {
    name: 'Cards',
    components: {
      Card,
      Popover
    },
    data: () => ({
      cards: [...Array(50).keys()]
    }),
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
