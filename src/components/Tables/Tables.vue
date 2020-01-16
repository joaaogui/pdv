<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto" v-for="card in cards" :key="card">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on }">
            <Card :card="card" :on="on"/>
          </template>
          <Popover/>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Popover from './Popover'
  import Card from './Card'

  export default {
    name: 'Cards',
    components: {
      Card,
      Popover
    },
    data: () => ({
      cards: ['01', '02', '03', '04', '05', '11', '72', '33', '44', '75', '231', '22', '343', '21', '105', '12', '32', '13', '43', '53', '91', '92', '93', '94', '95',]
    }),
  }
</script>
