<template>
  <v-list
    subheader
    dense
    class="pt-3 ml-7"
  >
    <v-list-item @click="addCustomer">
      <v-list-item-icon class="mr-1">
        <v-icon small>
          mdi-pencil
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        Criar Cadastro
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="inviteToApp">
      <v-list-item-icon class="mr-1">
        <v-icon small>
          mdi-email
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        Convidar para Onearby
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="deleteCustomer">
      <v-list-item-icon class="mr-1">
        <v-icon small>
          mdi-delete
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        Excluir cliente
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
  export default {
    name: 'UserActions',
    methods: {
      addCustomer () {
        console.log('bora')
      },
      inviteToApp () {
        console.log('bora')
      },
      deleteCustomer () {
        console.log('chama')
      }
    }
  }
</script>
