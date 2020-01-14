<template>
  <div>
    <v-card
      v-for="card in cards"
      :key="card"
      max-width="200"
      max-height="200"
      class="mx-auto"
    >
      <v-card-title>
        <v-spacer/>
        <v-chip
          color="red"
          text-color="white"
          label
        >
          12 <br> min
        </v-chip>
      </v-card-title>
      <v-card-text class="main-content">
        {{card}}
      </v-card-text>

      <v-card-actions style="display: block">
        <p>21 itens</p>
        <p>9 pedidos</p>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Cards',
    data: () => ({
      cards: ['01', '02', '03', '04', '05', '11', '02', '03', '04', '05', '01', '02', '03', '04', '05', '01', '02', '03', '04', '05', '01', '02', '03', '04', '05',]
    }),
  }
</script>

<style scoped>
.main-content{
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
