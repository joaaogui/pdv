<template>
  <v-card>
    <v-list class="list">
      <v-list-group>
        <template v-slot:activator>
          <v-avatar size="30" class="item-amount">
            <span>5</span>
          </v-avatar>
          <v-list-item-content class="ml-3">Itens</v-list-item-content>
        </template>
        <v-list subheader>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-avatar>
              <v-avatar size="30" class="item-amount">
                <span>1</span>
              </v-avatar>
            </v-list-item-avatar>
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
        </v-list>
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

  .list {
    width: 100%
  }
</style>
