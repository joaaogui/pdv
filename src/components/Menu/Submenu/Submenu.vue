<template>
  <v-row
    class="submenu"
    :class="rightSidebar ? 'open-sidebar-content' : '' "
  >
    <v-col
      class="ma-0 pa-0"
      cols="auto"
      v-for="(item, index) in itens"
      :key="index"
    >
      <Item
        :item="item"
        :back-button="index === 0"
      />
    </v-col>
  </v-row>
</template>

<script>
  import Item from './Item'
  import { getCategoryItens } from '@/api/categories'

  export default {
    name: 'Submenu',
    components: {
      Item
    },
    computed: {
      categoryId () {
        return this.$store.state.category.id
      },
      rightSidebar () {
        return this.$store.state.rightSidebar
      }
    },
    created () {
      this.getCategoryItens()
    },
    methods: {
      async getCategoryItens () {
        try {
          let itens = await getCategoryItens(this.categoryId)
          itens = itens.data.data.map(v => ({ ...v, amount: 1 }))
          this.itens = itens
        } catch (error) {
          console.log(error)
        }
      }
    },
    data: () => ({
      itens: []
    })
  }
</script>

<style scoped lang="scss">
  .submenu {
    padding-left: $main-content-padding;
    margin-bottom: $menu-card-margin;
    margin-left: 0;
  }
</style>
