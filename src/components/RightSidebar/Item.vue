<template>
  <div>
    <v-list-item>
      <v-avatar size="30" class="mr-3 item-amount">
        <span>1</span>
      </v-avatar>
      <v-list-item-content>
        {{item.name}}
      </v-list-item-content>
      <v-list-item-icon>
        R$ {{item.price}}
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" color="indigo">mdi-dots-vertical</v-icon>
          </template>
          <v-list>
            <v-list-item @click="removeItem">
              Remover item
            </v-list-item>
            <v-list-item>
              <v-list-item-title v-if="!observations" @click="observations = !observations">Adicionar observação</v-list-item-title>
              <v-list-item-title v-else @click="observations = !observations">Remover observação</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title v-if="!alergy" @click="alergy = !alergy">Adicionar alergia</v-list-item-title>
              <v-list-item-title v-else @click="alergy = !alergy">Remover alergia</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-icon>
    </v-list-item>
    <div class="input">
      <div v-if="alergy">
        <div class="observation-title">Alergias</div>
        <v-textarea rows="1" row-height="20"/>
      </div>
      <div v-if="observations">
        <div class="observation-title">Observações</div>
        <v-textarea rows="1" row-height="20"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Item',
    props: {
      item: Object
    },
    data: () => ({
      observations: false,
      alergy: false,
    }),
    methods: {
      removeItem() {

      }
    }
  }
</script>
<style scoped>
  .item-amount {
    border: solid 1px #d3d3d3;
  }

  .input {
    margin-left: 58px;
    margin-right: 58px;
  }

  .observation-title {
    font-size: 0.875em;
    font-weight: bold;
    color: #828799;
  }

</style>
