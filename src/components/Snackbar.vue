<template>
  <v-snackbar
    top
    v-model="snackbar.visible"
    :timeout="snackbar.timeout"
    :multi-line="snackbar.multiline === true">

    {{ snackbar.text }}

    <v-btn dark @click="closeSnackbar">Close</v-btn>

  </v-snackbar>
</template>

<script>
  export default {
    name: "Snackbar",
    computed: {
      snackbar() {
        return this.$store.state.snackbar
      }
    },
    methods: {
      closeSnackbar() {
        this.$store.commit('closeSnackbar')
      }
    }

  }
</script>

<style scoped>

</style>
