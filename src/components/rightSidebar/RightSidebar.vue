<template>
  <v-navigation-drawer
    fixed
    right
    :width="rightSidebarWidth"
    class="right-sidebar"
    permanent
  >
    <v-container
      fluid
      class="ma-0 pa-0 main-container"
    >
      <TableOrderInfo />
      <div class="content">
        <User />
        <ItemList />
      </div>
      <BottomContent />
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  import variables from '../../scss/variables.scss'
  import BottomContent from './BottomContent'
  import TableOrderInfo from './TableOrderInfo'
  import User from './User'
  import ItemList from './ItemList'

  export default {
    name: 'Sidebar',
    components: { ItemList, User, TableOrderInfo, BottomContent },
    data: () => ({
      rightSidebarWidth: variables.rightSidebarWidth
    })
  }
</script>

<style scoped lang="scss">
  .main-container {
    position: relative;
    height: 100%;
  }

  .content {
    max-height: 40%;
    overflow: auto;
  }

  .right-sidebar {
    border-top-left-radius: $navbar-border-radius;
    border-bottom-left-radius: $navbar-border-radius;
    box-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.08);
    z-index: 20;
  }
</style>
