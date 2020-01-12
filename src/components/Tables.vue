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
          <b-card
            header-tag="header"
            footer-tag="footer"
          >
            <template v-slot:header>
              <div class="order-card-header">
                <b-badge variant="danger">12 <br> min</b-badge>
              </div>
            </template>
            <b-card-text class="text-center order-card-content h-75">
              {{ i }}
            </b-card-text>
            <template v-slot:footer>
              <em>4 Itens</em>
            </template>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Tables',
  data: () => ({
    icons: [
      'fa fa-facebook',
      'fa fa-twitter',
      'fa fa-google-plus',
      'fa fa-linkedin',
      'fa fa-instagram'
    ]
  })
}
</script>

<style scoped>
  .order-card-header {
    float: right;
  }

  .order-card-content {
    height: 125px;
  }
</style>
