<template>
  <div class="bottom-content">
<!--    <div>-->
<!--      <v-row no-gutters class="bottom-content-lines">-->
<!--        <v-col cols="8">Consumação Total Da Mesa:</v-col>-->
<!--        <v-col class="bottom-content-values" cols="4">R$ 189,60</v-col>-->
<!--      </v-row>-->
<!--      <v-row no-gutters class="bottom-content-lines">-->
<!--        <v-col cols="8">Taxas:</v-col>-->
<!--        <v-col class="bottom-content-values" cols="4">R$ 19,60</v-col>-->
<!--      </v-row>-->
<!--    </div>-->
    <div @click="toggleRightSidebar" class="blue-button vertically-centered-container">
      <v-row>
        <v-col cols="7">
          Fechar conta da mesa
        </v-col>
        <v-col class="bottom-content-values centered-container" cols="5">
         R$ {{table.totalSpending | money}}
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
  import {getTable} from "@/api/tables"

  export default {
    name: 'BottomContent',
    data: () => ({
      table: Object,
    }),
    computed: {
      tableId() {
        return this.$store.state.table.id
      },
    },
    created() {
      this.getTable()
    },
    methods: {
      async getTable() {
        try {
          let table = await getTable(this.tableId)
          this.table = table.data.table
        } catch (error) {
          console.log(error)
        }
      },
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      }
    }
  }
</script>
<style scoped lang="scss">
  .bottom-content {
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 10px;
  }
</style>
