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
      category: Model.extend({
        iten: hasMany()
      }),
      iten: Model.extend({
        category: belongsTo()
      }),
    },
    seeds(server) {
      server.createList("table", 20).forEach(table => {
        server.createList("order", 10, { table })
      })
      server.createList("category", 20).forEach(category => {
        server.createList("iten", 10, { category })
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
      category: Factory.extend({
        name(i){
          return `Categoria ${i + 1}`
        },
      }),
      iten: Factory.extend({
        name(i) {
          return `Item ${i + 1}`
        },
        price(){
          let min = 1.35
          let max = 550

          return Math.random() * (min - max) + max
        },
        amount: 1
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

      // Menu
      this.get("/category")
      this.get("/category/:id")
      this.post("/category")
      this.patch("/category/:id")
      this.del("/category/:id")
      this.get("/category/:id/itens", (schema, request) => {
        let category = schema.categories.find(request.params.id)
        return category.iten
      })
    },
  })
}
