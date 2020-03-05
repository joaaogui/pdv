<template>
  <div class="centered-container fill-height">
    <div>
      <div class="text-center">
        Selecione o seu estabelecimento abaixo
      </div>
      <v-autocomplete
        class="establishmentText"
        v-model="establishmentId"
        :items="establishments"
        item-text="nome"
        item-value="id"
        label="Estabelecimentos"
        @change="setEstablishment"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Establishments",
    data: () => ({
      establishmentId: null
    }),
    computed: {
      establishments() {
        return this.$store.state.establishments
      }
    },
    methods: {
      setEstablishment() {
        let data = {
          username: this.$route.params.input,
          password: this.$route.params.password,
          grant_type: "password",
          loja_id: this.establishmentId,
          client_id: process.env.VUE_APP_CLIENT_ID
        }
        this.$store.commit('setEstablishment', this.$store.state.establishments.find(i => i.id === this.establishmentId))
        this.$store.dispatch('establishmentLogin', data)
        this.$router.push('/pdv/tables')
      }
    }
  }
</script>0

<style scoped lang="scss">
  .establishmentText {
    color: $right-sidebar-text-color
  }
</style>
-
