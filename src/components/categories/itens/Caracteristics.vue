<template>
  <div class="caracteristics">
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
      <v-col cols="10" class="item-name vertically-centered-container">
        {{item.name}}
      </v-col>
    </v-row>
    <div v-for="(caracteristic, index) in item.caracteristics" :key="index">
      <v-row no-gutters class="caracteristic-name">
        {{caracteristic.name}}
      </v-row>
      <v-row no-gutters>
        <div v-for="(option, index) in caracteristic.options" :key="index" class="option option-text centered-container mr-3">
          {{option.name}}
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "caracteristics",
    computed: {
      item() {
        return this.$route.params.item
      }
    },
    methods: {
      goTo() {
        this.$router.go(-1)
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
  .card {
    width: $caracteristics-back-button-width;
    height: $caracteristics-back-button-height;
    border-radius: 10px;
    box-shadow: 0 3px 16px 0 rgba(50, 50, 71, 0.06), 0 3px 8px 0 rgba(50, 50, 71, 0.08);
    background-color: white;
  }
  .option {
    width: $caracteristics-back-button-width;
    height: $caracteristics-back-button-height;
    border-radius: 10px;
    box-shadow: 0 3px 16px 0 rgba(50, 50, 71, 0.06), 0 3px 8px 0 rgba(50, 50, 71, 0.08);
    background-color: white;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 60px;
    padding: 5px
  }
  .option-text {
    font-size: 17px;
    font-weight: 600;
    color: $right-sidebar-text-color;
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
</style>
