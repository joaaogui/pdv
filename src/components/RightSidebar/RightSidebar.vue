<template>
  <v-navigation-drawer
    fixed
    right
    :width="rightSidebarWidth"
    class="right-sidebar"
  >
    <v-container fluid class="ma-0 pa-0 main-container">
      <TableOrderInfo/>
      <MainContent/>
      <BottomContent/>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  import variables from '../../scss/variables.scss'
  import BottomContent from './BottomContent'
  import TableOrderInfo from './TableOrderInfo'
  import MainContent from './MainContent'
  import ItemList from './ItemList'
  import Payment from './Payment'

  export default {
    name: 'Sidebar',
    components: {Payment, ItemList, MainContent, TableOrderInfo, BottomContent},
    data: () => ({
      rightSidebarWidth: variables.rightSidebarWidth,
    }),
  }
</script>

<style scoped lang="scss">
  .main-container {
    position: relative;
    height: 100%;
  }

  .right-sidebar {
    border-top-left-radius: $navbar-border-radius;
    border-bottom-left-radius: $navbar-border-radius;
    box-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.08);
  }

</style>
