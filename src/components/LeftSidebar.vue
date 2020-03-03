<template>
  <v-navigation-drawer fixed permanent class="left-sidebar">
    <v-row no-gutters class="bottom-content-lines">
      <v-col cols="10">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="establishmentName">
              {{establishment.name}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col class="bottom-content-values centered-container" cols="2">
        <v-btn @click="toggleLeftSidebar" icon>
          <v-icon size="40">mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <template v-slot:append>
      <div @click="logout" class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'LeftSidebar',
    computed: {
     establishment(){
       return this.$store.state.establishment
     }
    },
    methods: {
      toggleLeftSidebar() {
        this.$store.commit('toggleLeftSidebar')
      },
      logout() {
        this.$store.dispatch('logout')
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .establishmentName {
    font-size: 1.6em;
  }

  .left-sidebar {
    border-top-right-radius: $navbar-border-radius;
    border-bottom-right-radius: $navbar-border-radius;
    box-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.08);
    z-index: 20;
  }
</style>
