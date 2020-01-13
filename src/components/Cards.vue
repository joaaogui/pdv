<template>
  <b-container
    fluid
    class="ma-0 pa-0"
  >
    <b-row>
      <b-col
        v-for="(card, i) in cards"
        :key="i"
      >
        <div>
          <b-card>
            <b-card-text class="text-center order-card-content h-75">
              {{ card }}
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "Cards",
    data: () => ({
      cards: [{main: "01"}]
    }),
  }
</script>

<style scoped>

</style>
