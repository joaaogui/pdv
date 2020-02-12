<template>
  <v-row class="submenu">
    <v-col class="ma-0 pa-0" cols="auto" v-for="(item, index) in itens" :key="index">
      <Card :item="item" :categoryName="category.name" :backButton="index === 0"/>
    </v-col>
  </v-row>
</template>

<script>
  import Card from './Card'
  import {getCategoryItens} from "@/api/categories"

  export default {
    name: 'Submenu',
    components: {
      Card,
    },
    props: {
      category: Object
    },
    created() {
      this.getCategoryItens()
    },
    methods: {
      async getCategoryItens() {
        try {
          let itens = await getCategoryItens(this.category.id)
          console.log(itens)
          this.itens = itens.data.itens
        } catch (error) {
          console.log(error)
        }
      },
    },
    data: () => ({
      itens: []
    }),
  }
</script>

<style scoped lang="scss">
  .submenu {
    padding-left: $main-content-padding;
    margin-bottom: $menu-card-margin;
    margin-right: 0;
    margin-left: 0;
  }
</style>
