<template>
  <v-card v-if="itensLength > 0">
    <v-list
      flat
      class="list"
    >
      <v-list-group
        :ripple="false"
        :value="titleRow"
        flat
        class="sublist"
        active-class="active-class"
      >
        <template v-slot:activator>
          <v-avatar
            size="40"
            class="mr-3 ml-3 all-item-amount"
          >
            {{ itensLength }}
          </v-avatar>
          <v-list-item-title
            v-if="itensLength === 1"
            class="right-sidebar-list-title"
          >
            Item
          </v-list-item-title>
          <v-list-item-title
            v-else
            class="right-sidebar-list-title"
          >
            Itens
          </v-list-item-title>
          <v-avatar
            size="40"
            class="mr-3 ml-3 all-item-amount"
          >
            <v-icon @click="addToOrder">mdi-plus</v-icon>
          </v-avatar>
        </template>
        <div
          v-for="(item, index) in itens"
          :key="index"
        >
          <Item :item="item"/>
        </div>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  import Item from './Item'

  export default {
    name: 'ItemList',
    components: {Item},
    data: () => ({
      titleRow: true
    }),
    computed: {
      itens() {
        return this.$store.state.itens
      },
      itensLength() {
        return this.$store.getters.itensLength
      }
    },
    methods: {
      addToOrder() {
        this.titleRow = true
        this.$router.push({name: 'category'})
        this.titleRow = true
      }
    }
  }
</script>

<style scoped>
  .all-item-amount {
    border: solid 1px #d3d3d3;
    font-size: 1.3em;
  }

  .list {
    width: 100%;
  }

  .sublist {
    max-height: 350px;
    overflow: auto;
  }

  .observation-text {
    font-size: 0.8125em;
    letter-spacing: normal;
    color: #828799;
  }
</style>
