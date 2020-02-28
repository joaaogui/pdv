<template>
  <div class="centered-container">
    <v-autocomplete
      v-model="establishment"
      :items="establishments"
      item-text="nome"
      item-value="id"
      label="Estabelecimentos"
      @change="setEstablishment"
    ></v-autocomplete>
  </div>
</template>

<script>
  export default {
    name: "Establishments",
    data: () => ({
      establishment: null
    }),
    computed: {
      establishments() {
        return this.$store.state.establishments
      }
    },
    methods: {
      setEstablishment() {
        console.log(process.env)
        let data = {
          username: this.$route.params.input,
          password: this.$route.params.password,
          origem: 1,
          grant_type: "password",
          loja_id: this.establishment,
          client_id: process.env.VUE_APP_AUTH_URL
        }

        this.$store.commit('setEstablishment', this.establishment)
        this.$store.dispatch('establishmentLogin', data)
        this.$router.push('/pdv')
      }
    }
  }
</script>

<style scoped>

</style>
-
