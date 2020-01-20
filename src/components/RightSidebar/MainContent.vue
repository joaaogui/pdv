<template>
  <v-row no-gutters class="ma-0 pa-0">
    <v-card class="name-card vertically-centered-container">
      <v-list style="width: 100%;">
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
</template>
<script>
  export default {
    name: 'MainContent',
  }
</script>

<style scoped lang="scss">
  .name-card {
    height: 90px;
    width: $right-sidebar-width;
  }
</style>
