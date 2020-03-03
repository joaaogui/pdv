<template>
  <div>
    <v-card v-if="backButton" @click="goTo" class="card centered-container vertically-centered-container">
      <v-icon large>mdi-arrow-left</v-icon>
    </v-card>
    <v-card v-else @click="addToOrder" class="card">
      <div class="header">
        {{category.name}}
      </div>
      <v-card-text class="main-content centered-container">
        {{item.name}}
      </v-card-text>
      <div class="footer centered-container">
        R$ {{item.price | money}}
      </div>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      backButton: Boolean,
      item: Object,
    },
    computed: {
      category() {
        return this.$store.state.category
      },
    },
    methods: {
      goTo() {
        this.$router.go(-1)
      },
      addToOrder() {
        let item = {
          id: this.item.id,
          name: this.item.name,
          qnt: 1,
          price: this.item.price,
          itens: [],
          alergias: '',
          observacoes: ''
        }
        this.$store.commit('addItem', item)
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    height: $menu-card-size;
    width: $menu-card-size;
    margin-top: $menu-card-margin;
    margin-right: $submenu-card-margin;
    border-radius: 10px !important;
    padding: 10px;
    position: relative;
  }

  .header {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: #aeb1b8;
  }

  .main-content {
    color: $right-sidebar-text-color !important;
    text-align: center;
    font-weight: 500;
    font-size: 1.4em;
    height: 70%;
  }

  .footer {
    font-size: 1em;
    color: $right-sidebar-text-color;
    position: absolute;
    bottom: 0;
    height: 20%;
    width: $menu-card-size - 20;
    text-align: center;
  }
</style>
