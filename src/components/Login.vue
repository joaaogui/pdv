<template>
  <v-row class="centered-container login">
    <v-col
      cols="11"
      xs="12"
      sm="8"
      md="6"
      lg="4"
      xl="6"
    >
      <div>
        <div class="first-text"> Acesso ao Onearby Empresa</div>
        <v-text-field
          label="telefone ou email"
          solo
          height="65px"
          rounded
          class="rounded-text-field"
        />
        <v-text-field
          label="senha"
          solo
          dense
          height="65px"
          rounded
          type="password"
          class="rounded-text-field mb-0 pb-0"
        />
        <v-row no-gutters class=" vertically-centered-container">
          <v-col cols="6" class="login-options">
            <v-checkbox class="mx-2" label="Lembrar-me"/>
          </v-col>
          <v-col cols="6">
            <div class="forgot-password">esqueceu sua senha?</div>
          </v-col>
        </v-row>
        <div @click="login" class="blue-button login-button mt-4 mb-12">Login</div>
        <hr class="mb-8">
        <div class="no-account mb-6">Ainda nao tem conta ?</div>
        <div class="pl-12 pr-12">
          <div class="blue-overlay-button register-button pl-0 pr-0">Cadastrar nova conta</div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      login() {
        this.$router.push({path: 'pdv'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .first-text {
    font-size: 1.25em;
    color: $right-sidebar-text-color;
    margin-bottom: 40px;
  }

  .login {
    text-align: center;
    height: 100%
  }

  .login-options {
    display: flex;
  }

  .forgot-password {
    text-align: right;
    color: #003cff
  }

  .rounded-text-field {
    border-radius: 10px;
  }

  .login-button {
    height: 55px;
  }

  .register-button {
    height: 55px;
    border-radius: 15px;
    border: solid 1px #2f3447;
    color: $right-sidebar-text-color;
  }

  .no-account {
    font-size: 1.25em;
    color: $right-sidebar-text-color;
  }
</style>
