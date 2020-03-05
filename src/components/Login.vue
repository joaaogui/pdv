<template>
  <div class="login-body">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="centered-container mt-4 mb-4">
          <img
            src="../assets/Images/ONE.svg"
            height="45px"
            alt=""
          >
        </div>
      </v-col>
    </v-row>
    <hr style="height: 2px;">
    <div style="height: 90%">
      <v-row
        no-gutters
        class="centered-container login"
      >
        <v-col
          cols="11"
          sm="6"
          md="4"
          lg="3"
          xl="3"
        >
          <div>
            <div class="first-text">
              Acesso ao Onearby Empresa
            </div>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="input"
                label="telefone ou email"
                solo
                height="65px"
                rounded
                class="rounded-text-field"
                :rules="[rules.required]"
                @keydown="clearInput"
              />
              <v-text-field
                :loading="loading"
                v-model="password"
                label="senha"
                solo
                dense
                height="65px"
                rounded
                type="password"
                class="rounded-text-field mb-0 pb-0"
                :error="!!message"
                :messages="this.message"
                :rules="[rules.required]"
                @keydown="clearInput"
                @keyup.enter="verifyAccount"
              />
            </v-form>
            <!--            <v-row no-gutters class=" vertically-centered-container">-->
            <!--              <v-col cols="6" class="login-options">-->
            <!--                <v-checkbox class="mx-2" label="Lembrar-me"/>-->
            <!--              </v-col>-->
            <!--              <v-col cols="6">-->
            <!--                <div class="forgot-password">esqueceu sua senha?</div>-->
            <!--              </v-col>-->
            <!--            </v-row>-->
            <div
              @click="verifyAccount"
              class="blue-button login-button mt-4 mb-12"
            >
              Login
            </div>
            <hr class="mb-8">
            <div class="no-account mb-6">
              Ainda nao tem conta ?
            </div>
            <div class="pl-12 pr-12">
              <div class="blue-overlay-button register-button pl-0 pr-0">
                Cadastrar nova conta
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  import { verifyAccount } from '../api/login'

  export default {
    name: 'Login',
    data: () => ({
      valid: true,
      input: null,
      password: null,
      wrongInput: false,
      message: '',
      loading: null,
      rules: {
        required: value => !!value || 'Campo obrigatório'
      }
    }),
    computed: {
      establishments () {
        return this.$store.state.establishments
      }
    },
    methods: {
      async verifyAccount () {
        if (this.$refs.form.validate()) {
          this.loading = true
          try {
            const response = await verifyAccount({ input: this.input, password: this.password })
            if (response.data.success) {
              this.loading = false
              this.$store.commit('setEstablishments', response.data.data.estabelecimentos)
              if (this.establishments.length === 1) {
                this.$store.commit('setEstablishment', this.establishments[0])
                let data = {
                  username: this.input,
                  password: this.password,
                  grant_type: 'password',
                  loja_id: this.establishments[0].id,
                  client_id: process.env.VUE_APP_CLIENT_ID
                }
                this.$store.dispatch('establishmentLogin', data)
                this.$router.push('/pdv/tables')
              } else {
                this.$router.push({ name: 'establishments', params: { input: this.input, password: this.password } })
              }
            }
          } catch (error) {
            this.message = error.message
            this.loading = false
            this.password = ''
          }
        }
      },
      clearInput () {
        this.message = ''
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

  .login-body {
    background-color: #f5f6fa;
    height: 100%
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
