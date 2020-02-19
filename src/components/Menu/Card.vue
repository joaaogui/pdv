<template>
  <div @click="setCategory(category)">
    <v-card class="card centered-container">
      <div class="smaller-card centered-container">
        <v-card-text class="main-content">
          {{category.name}}
        </v-card-text>
      </div>
    </v-card>
    <div class="shadow"/>
    <div class="smaller-shadow"/>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      category: Object,
    },
    methods: {
      setCategory(category) {
        this.$store.commit('setCategory', category)
        this.$router.push({path: `/pdv/menu/${category.id}/submenu`})
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    height: $menu-card-size;
    width: $menu-card-size;
    margin-top: $menu-card-margin;
    margin-right: $menu-card-margin;
    border-radius: 10px !important;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  .smaller-card {
    height: $menu-card-size - 20;
    width: $menu-card-size - 20;
    border: 1px solid #d4cccc;
    border-radius: 10px !important;
  }

  .shadow {
    height: 10px;
    width: $menu-card-size - 10;
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    margin-left: 4px;
    position: relative;
    z-index: 1;
  }

  .smaller-shadow {
    height: 8px;
    width: $menu-card-size - 20;
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    margin-left: 9px;
    position: relative;
    z-index: 0;
  }

  .main-content {
    text-align: center;
    font-size: 1.2em;
    color: $right-sidebar-text-color;
  }
</style>
