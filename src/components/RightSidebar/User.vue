<template>
  <v-card>
    <v-list flat class="list">
      <v-list-group :ripple="false" flat active-class="active-class">
        <template v-slot:activator>
          <v-avatar size="40" color="grey" class="mr-3 ml-3">
            <v-icon dark size="32">mdi-account</v-icon>
          </v-avatar>
          {{orderName}}
          <v-list-item-title v-if="orderName" class="right-sidebar-list-title">{{orderName}}</v-list-item-title>
          <v-list-item-title v-else class="right-sidebar-list-title">
            <v-text-field
              v-model="name"
              dense
              color="blue"
              :rules="[rules.required]"
              @keyup="setName"
              label="Digite o nome do cliente"
            />
          </v-list-item-title>
        </template>
        <UserActions/>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
  import UserActions from "./UserActions"

  export default {
    name: 'User',
    components: {UserActions},
    data: () => ({
      rules: {
        required: value => !!value || 'Obrigatório.',
      },
      name: ''
    }),
    computed: {
      orderName() {
        return this.$store.state.order.userName
      }
    },
    methods: {
      setName() {
        this.$store.commit('setOrderName', this.name)

      }
    }
  }
</script>

<style scoped lang="scss">
  .item-amount {
    border: solid 1px #d3d3d3;
  }

  .v-list-item--active {
    color: white
  }

  .all-item-amount {
    border: solid 1px #d3d3d3;
    font-size: 1.3em;
  }

  .list {
    width: 100%;
    margin-bottom: 10px;
  }
</style>
