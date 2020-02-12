import { Server, Model, Factory, hasMany, belongsTo } from "miragejs"

export default function(){
  new Server({
    models: {
      table: Model.extend({
        order: hasMany()
      }),
      order: Model.extend({
        table: belongsTo()
      }),
    },
    seeds(server) {
      server.createList("table", 20).forEach(table => {
        server.createList("order", 10, { table }).forEach(order => {
          server.createList("item", 5, { order })
        })
      })
    },
    factories: {
      table: Factory.extend({
        number(i) {
          return `${i + 1}`
        },
        duration() {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        itens() {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        orders() {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
      }),
      order: Factory.extend({
        number(i) {
          return `${i + 1}`
        },
        duration() {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
      }),
      item: Factory.extend({
        name(i) {
          return `Item ${i + 1}`
        },
        price(){
          let min = 1.35
          let max = 550

          return (Math.random() * (min - max) + min).toFixed(2)
        }
      }),
    },
    routes() {
      this.namespace = ""

      // Tables
      this.get("/tables")
      this.get("/tables/:id")
      this.post("/tables")
      this.patch("/tables/:id")
      this.del("/tables/:id")
      this.get("/table/:id/orders", (schema, request) => {
        let table = schema.tables.find(request.params.id)
        return table.order
      })
      this.get("/order/:id/itens", (schema, request) => {
        let order = schema.orders.find(request.params.id)
        return order.item
      })
    },
  })
}
