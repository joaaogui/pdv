<template>
  <v-card>
    <v-list flat class="list">
      <v-list-group :ripple="false" flat class="sublist" active-class="active-class">
        <template v-slot:activator>
          <v-avatar size="40" class="mr-3 ml-3 all-item-amount">
            5
          </v-avatar>
          <v-list-item-title class="right-sidebar-list-title">Itens</v-list-item-title>
        </template>
        <div v-for="(item, index) in items" :key="item.title">
          <v-list-item>
            <v-avatar size="30" class="mr-3 item-amount">
              <span>1</span>
            </v-avatar>
            <v-list-item-content>
              Marguerita
            </v-list-item-content>
            <v-list-item-icon>
              R$ 49,90
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" color="indigo">mdi-dots-vertical</v-icon>
                </template>
                <v-list>
                  <v-list-item v-for="(i, index) in items" :key="index">
                    <v-list-item-title>Do Stuff</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-icon>
          </v-list-item>
          <div class="observations" v-if="index === 1">
            <div class="observation-title">Alergias</div>
            <v-textarea
              rows="1"
              row-height="20"
            />
            <div class="observation-title">Observações</div>
            <v-textarea
              rows="1"
              row-height="20"
            />
          </div>
        </div>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'ItemList',
    data: () => ({
      items: [
        {active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
        {active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
        {title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
        {title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      ],
      items2: [
        {title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'},
      ],
    }),
  }
</script>

<style scoped>
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
  }

  .sublist {
    max-height: 350px;
    overflow: auto;
  }

  .observations {
    margin-left: 58px;
    margin-right: 58px;
  }

  .observation-title {
    font-size: 0.875em;
    font-weight: bold;
    color: #828799;
  }

  .observation-text {
    font-size: 0.8125em;
    letter-spacing: normal;
    color: #828799;
  }
</style>
