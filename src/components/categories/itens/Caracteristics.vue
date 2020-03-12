<template>
  <div
    class="caracteristics"
    :class="rightSidebar ? 'open-sidebar-content' : '' "
  >
    <v-row no-gutters>
      <v-col cols="2">
        <v-card
          @click="goTo"
          class="card centered-container"
        >
          <v-icon large>
            mdi-arrow-left
          </v-icon>
        </v-card>
      </v-col>
      <v-col
        cols="10"
        class="item-name vertically-centered-container"
      >
        {{item.name}}
      </v-col>
    </v-row>
    <div
      v-for="(caracteristic, index) in item.caracteristics"
      :key="index"
    >
      <v-row
        no-gutters
        class="caracteristic-name "
      >
        {{caracteristic.name}}
        <span v-if="caracteristic.mandatory" class="required">*</span>
      </v-row>
      <v-row no-gutters>
        <v-card
          v-for="(option, index) in caracteristic.options"
          :key="index"
          @click="addItemCaracteristic(option, caracteristic)"
          class="big-option mr-3"
        >
          <div class="header">
            {{ caracteristic.name }}
          </div>
          <v-card-text class="main-content centered-container">
            {{option.name}}
          </v-card-text>
          <div
            v-if="option.price"
            class="footer centered-container"
          >
            + R$ {{ option.price | money }}
          </div>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
  import swal from 'sweetalert2'

  export default {
    name: 'Caracteristics',
    data: () => ({
      requiredCaracteristics: {},
      unrequiredCaracteristics: {}
    }),
    computed: {
      item() {
        return this.$route.params.item
      },
      rightSidebar() {
        return this.$store.state.rightSidebar
      },
      requiredAmount() {
        return this.item.caracteristics.filter(caracteristic => caracteristic.mandatory).length
      },
      requiredFilled() {
        return this.requiredAmount === Object.keys(this.requiredCaracteristics).length
      }
    },
    methods: {
      goTo() {
        if (this.requiredFilled) {
          this.$router.go(-1)
        } else {
          swal.fire({
            icon: 'warning',
            title: 'Existem opções obrigatórias não preenchidas.',
            text: 'Caso retorne, o produto não será adicionado ao produto.',
            showCancelButton: true,
            confirmButtonText: 'Permanecer na página',
            cancelButtonText: 'Retornar'
          }).then((result) => {
            if (!result.value) {
              this.$router.go(-1)
            }
          })
        }
      },
      addItemCaracteristic(option, caracteristic) {
        if (caracteristic.mandatory) {
          if (caracteristic.type === 'SelecaoPadrao') {
            this.requiredCaracteristics[caracteristic.name] = option
          } else {
            if (!(caracteristic.name in this.requiredCaracteristics)) {
              this.requiredCaracteristics[caracteristic.name] = []
              this.requiredCaracteristics[caracteristic.name].push(option)
            } else {
              this.requiredCaracteristics[caracteristic.name].push(option)
            }
          }
        } else {
          if (caracteristic.type === 'SelecaoPadrao') {
            this.unrequiredCaracteristics[caracteristic.name] = option
          } else {
            if (!(caracteristic.name in this.unrequiredCaracteristics)) {
              this.unrequiredCaracteristics[caracteristic.name] = []
              this.unrequiredCaracteristics[caracteristic.name].push(option)
            } else {
              this.unrequiredCaracteristics[caracteristic.name].push(option)
            }
          }
        }
        if (this.requiredAmount === Object.keys(this.requiredCaracteristics).length) {
          this.showSnackbar('Item Adicionado!')
        }
      },
      showSnackbar(message) {
        this.$store.commit('showSnackbar', {text: message, timeout: 1000})
      }
    }
  }
</script>

<style scoped lang="scss">
  .caracteristics {
    padding: 28px;
  }

  .caracteristic {
    margin-top: 40px;
  }

  .required {
    font-size: 16px;
    color: $pinky-red;
    margin-left: 5px;
  }

  .card {
    max-width: $caracteristics-back-button-width;
    height: $caracteristics-back-button-height;
    border-radius: 10px;
    box-shadow: 0 3px 16px 0 rgba(50, 50, 71, 0.06), 0 3px 8px 0 rgba(50, 50, 71, 0.08);
    background-color: white;
    margin-right: 20px;
  }

  .option {
    max-width: $caracteristics-back-button-width;
    height: $caracteristics-back-button-height;
    border-radius: 10px;
    box-shadow: 0 3px 16px 0 rgba(50, 50, 71, 0.06), 0 3px 8px 0 rgba(50, 50, 71, 0.08);
    background-color: white;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 60px;
    padding: 5px;
    cursor: pointer !important;
  }

  .big-option {
    height: $menu-card-size;
    width: $menu-card-size;
    margin-top: 20px;
    margin-right: $submenu-card-margin;
    border-radius: 10px !important;
    padding: 10px;
    position: relative;
  }

  .option-text {
    font-size: 17px;
    font-weight: 600;
    color: $right-sidebar-text-color;
    text-align: center;
  }

  .item-name {
    font-size: 30px;
    height: $caracteristics-back-button-height;
    color: $right-sidebar-text-color;
  }

  .caracteristic-name {
    padding-top: 40px;
    font-size: 20px;
    font-weight: 600;
    color: #828799;
  }

  .header {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: #aeb1b8;
  }

  .main-content {
    color: $right-sidebar-text-color !important;
    text-align: center;
    font-weight: 500;
    font-size: 1.4em;
    height: 70%;
  }

  .footer {
    font-size: 1em;
    color: $right-sidebar-text-color;
    position: absolute;
    bottom: 0;
    height: 20%;
    width: $menu-card-size - 20;
    text-align: center;
  }
</style>
