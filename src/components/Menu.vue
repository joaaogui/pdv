<template>
  <b-container
    fluid
    class="ma-0 pa-0"
  >
    <b-row>
      <b-col
        sm="2"
        v-for="i in [1,2,3,4,5,6,7,8,19,11,12,13,14,52,26,73,48,49]"
        :key="i"
      >
        <div>
          <b-card>
            <b-card-text class="text-center order-card-content h-75">
              {{ i }}
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

</style>
