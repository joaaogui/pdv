<template>
  <div>
    <div>
      <b-navbar toggleable="lg" class="navbar">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"/>

        <b-collapse id="nav-collapse" is-nav>
          <v-btn
            color="pink"
            dark
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>

              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div>
<!--      <Tables/>-->
      <Menu />
<!--      <Orders />-->
    </div>
    <div>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        :right="true"
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </div>
    <div>
      <v-footer dark absolute padless >
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              color="pink"
              dark
              @click="goTo(icon.path)"
            >
              {{ icon.text }}
            </v-btn>
          </v-card-title>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
// import Tables from '../components/Tables'
// import Orders from "../components/Orders";
import Menu from '../components/Menu'

export default {
  name: 'Pdv',
  components: {
    // Tables,
    // Orders,
    Menu },
  data: () => ({
    drawer: null,
    icons: [
      { text: 'Mesas', icon: 'table', path: 'Tables' },
      { text: 'Menu', icon: 'sdasd', path: 'Menu' },
      { text: 'Pedidos', icon: 'tabsadasdle', path: 'Orders' }
    ]
  }),
  methods: {
    goTo (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style scoped>

  .navbar {
    height: 89px;
    background-color: #343d63;
  }
</style>
