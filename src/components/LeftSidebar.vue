<template>
  <v-navigation-drawer
    fixed
    permanent
    class="left-sidebar"
  >
    <v-row
      no-gutters
      class="bottom-content-lines"
    >
      <v-col cols="10">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="establishmentName">
              <v-autocomplete
                hide-details
                class="establishmentText"
                v-model="establishmentId"
                :items="establishments"
                item-text="nome"
                item-value="id"
                label="Estabelecimento"
                @change="setEstablishment"
              />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col
        class="bottom-content-values centered-container"
        cols="2"
      >
        <v-btn
          @click="toggleLeftSidebar"
          icon
        >
          <v-icon size="30">
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <template v-slot:append>
      <div
        @click="logout"
        class="pa-2"
      >
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'LeftSidebar',
    data: () => ({
      establishmentId: null
    }),
    created () {
      this.establishmentId = this.establishment.id
    },
    computed: {
      establishment () {
        return this.$store.state.establishment
      },
      establishments () {
        return this.$store.state.establishments
      }
    },
    methods: {
      toggleLeftSidebar () {
        this.$store.commit('toggleLeftSidebar')
      },
      logout () {
        this.$store.dispatch('logout')
        this.$router.go()
        localStorage.clear()
      },
      setEstablishment () {
        this.$store.commit('setEstablishment', this.$store.state.establishments.find(i => i.id === this.establishmentId))
        this.toggleLeftSidebar()
        this.$router.go()
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
