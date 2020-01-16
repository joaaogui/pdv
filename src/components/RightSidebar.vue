<template>
  <v-navigation-drawer
    fixed
    :right="true"
    app
    :width="rightSidebarWidth"
    class="right-sidebar"
  >
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-icon>mdi-table-chair</v-icon>
          07
        </v-col>
        <v-col cols="6">
          <v-badge
            color="green"
            dot
          >
          #00519
          </v-badge>
        </v-col>
      </v-row>

      <v-row>
        <v-card
          class="mx-auto"
          width="300"
        >
        <v-list>
          <v-list-group         prepend-icon="mdi-account">
            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>
            <v-list-group
              no-action
              sub-group
              value="true">
              <template v-slot:activator>
                <v-avatar color="indigo" size="36">
                  <span class="white--text headline">36</span>
                </v-avatar>
                <v-list-item-title>Itens</v-list-item-title>
              </template>
              <div>
                Chama
              </div>
            </v-list-group>
            <div> Forma de pagamento</div>
          </v-list-group>
        </v-list>
        </v-card>
      </v-row>

      <v-row>
        <v-col cols="8">
          Subtotal
        </v-col>
        <v-col cols="4">
            R$ 199,60
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          Taxa de serviço 10%
        </v-col>
        <v-col cols="4">
            R$ 19,60
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          Couvert Artístico
        </v-col>
        <v-col cols="4">
            - 3 +
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          Desconto
        </v-col>
        <v-col cols="4">
            R$ 1,60
        </v-col>
      </v-row>

      <div class="bottom-button">
        <v-row>
          <v-col cols="8">
            Fechar Conta
          </v-col>
          <v-col cols="4">
            R$ 299,60
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  import variables from '../scss/variables.scss'
  export default {
    name: 'Sidebar',
    data: () => ({
      cards: ['01', '02', '03', '04', '05', '11', '72', '33', '44', '75', '231', '22', '343', '21', '105', '12', '32', '13', '43', '53', '91', '92', '93', '94', '95'],
      rightSidebarWidth: variables.rightSidebarWidth
    }),
    methods: {
      toggleRightSidebar() {
        this.$store.commit('toggleRightSidebar')
      }
    }
  }
</script>

<style scoped lang="scss">
.bottom-button {
  color: white;
  background-color: blue;
}
.right-sidebar {
  width: 900px
}

</style>
