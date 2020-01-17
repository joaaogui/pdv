<template>
  <v-navigation-drawer
    fixed
    :right="true"
    :width="rightSidebarWidth"
    class="right-sidebar"
  >
    <v-container fluid class="ma-0 pa-0 main-container">
      <div class="table-number-order-container vertically-centered-container">
        <div class="table-number-order-element">
          <div class="table-number">
            <v-icon color="">mdi-table-chair</v-icon>
            07
          </div>
          <div class="order">
            <v-badge
              color="green"
              dot
            >
              #00519
            </v-badge>
          </div>
        </div>
      </div>
      <v-row>
        <v-card
          class="mx-auto"
          width="300"
        >
          <v-list>
            <v-list-group prepend-icon="mdi-account">
              <template v-slot:activator>
                <v-list-item-title>Rafael Rascovit</v-list-item-title>
              </template>
              <v-list-group
                no-action
                sub-group
                value="true"
              >
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
      <div class="bottom-content">
        <div>
          <v-row no-gutters class="bottom-content-lines">
            <v-col cols="8">Subtotal</v-col>
            <v-col class="bottom-content-values" cols="4">R$ 199,60</v-col>
          </v-row>
          <v-row no-gutters class="bottom-content-lines">
            <v-col cols="8">Taxa de serviço 10%</v-col>
            <v-col class="bottom-content-values" cols="4">R$ 19,60</v-col>
          </v-row>
          <v-row no-gutters class="bottom-content-lines">
            <v-col cols="8">Couvert Artístico</v-col>
            <v-col class="bottom-content-values" cols="4">- 3 +</v-col>
          </v-row>
          <v-row no-gutters class="bottom-content-lines">
            <v-col cols="8">Desconto</v-col>
            <v-col class="bottom-content-values" cols="4">R$ 1,60</v-col>
          </v-row>
        </div>

        <div @click="toggleRightSidebar" class="bottom-button">
          <v-row>
            <v-col cols="7">
              Fechar Conta
            </v-col>
            <v-col class="bottom-content-values" cols="5">
              R$ 299,60
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  import variables from '../scss/variables.scss'

  export default {
    name: 'Sidebar',
    data: () => ({
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
  .main-container {
    position: relative;
    height: 100%;
  }

  .bottom-content {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-right: $right-sidebar-padding;
    padding-left: $right-sidebar-padding;
    padding-bottom: $right-sidebar-padding;
  }

  .bottom-content-lines{
    padding-bottom: 15px;
  }

  .bottom-content-values {
    text-align: right;
    font-weight: bold;
  }

  .table-number {
    font-size: 26px;
    font-weight: bold;
    color: $right-sidebar-text-color;
  }

  .table-number-order-container {
    height: $navbar-height;
    padding-right: $right-sidebar-padding;
    padding-left: $right-sidebar-padding;
  }

  .table-number-order-element {
    display: flex;
  }

  .bottom-button {
    padding: 15px;
    height: 65px;
    color: white;
    background-color: blue;
    border-radius: $navbar-border-radius;
    font-size: 1.125em;
    font-weight: bold;
    cursor: pointer;
  }

  .order {
    margin-left: auto;
    margin-right: 0;
  }

  .right-sidebar {
    border-top-left-radius: $navbar-border-radius;
    border-bottom-left-radius: $navbar-border-radius;
    box-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.08);
  }

</style>
