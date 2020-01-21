<template>
  <v-row no-gutters class="ma-0 pa-0">
    <v-card class="name-card vertically-centered-container">
      <v-list flat class="list">
        <v-list-group :ripple="false" flat>
          <template v-slot:activator>
            <v-avatar size="40" color="grey" class="mr-3 ml-3">
              <v-icon dark size="32">mdi-account</v-icon>
            </v-avatar>
            <v-list-item-title class="right-sidebar-list-title">Rafael Rascovit</v-list-item-title>
          </template>
          <ItemList/>
          <Payment/>
        </v-list-group>
      </v-list>
    </v-card>
  </v-row>
</template>
<script>
  import ItemList from './ItemList'
  import Payment from './Payment'

  export default {
    name: 'MainContent',
    components: {Payment, ItemList},
  }
</script>

<style scoped lang="scss">
  .name-card {
    height: 90px;
    width: $right-sidebar-width;
  }

  .list {
    width: 100%;
    height: 50px;
  }
</style>
