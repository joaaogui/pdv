import { Server, Model, Factory } from "miragejs"

export default function(){
  new Server({
    models: {
      table: Model,
    },
    seeds(server) {
      server.createList("table", 10)
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
          let min = 1
          let max = 50

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        orders() {
          let min = 1
          let max = 50

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
      }),
    },
    routes() {
      this.namespace = ""

      this.get("/tables")
      this.get("/tables/:id")
      this.post("/tables")
      this.patch("/tables/:id")
      this.del("/tables/:id")
    },
  })
}
