<template>
  <v-card class="container" :class="delayedTable ? 'delayed' : 'normal'">
    <div class="text">
      {{duration}} <br> min
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'TimeCard',
    props: {
      duration: Number,
    },
    computed: {
      delayedTable (){
        return this.duration > 30
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .normal {
    background-color: $gray-blue;
  }

  .delayed {
    background-color: $pinky-red;
  }

  .text {
    font-size: 0.75em;
    color: white;
    font-weight: 500;
    text-align: center;
  }

</style>
