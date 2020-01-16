<template>
  <v-card class="container">
    <div class="text">
      12 <br> min
    </div>
  </v-card>
</template>

<script>
    export default {
        name: 'TimeCard'
    }
</script>

<style scoped>
  .container {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #586e98;
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .text {
    font-size: 0.75em;
    color: white;
    font-weight: 500;
    text-align: center;
  }

</style>
