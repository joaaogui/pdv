import { belongsTo, Factory, hasMany, Model, Server } from 'miragejs'

export default function () {
  new Server({
    models: {
      table: Model.extend({
        order: hasMany()
      }),
      order: Model.extend({
        table: belongsTo(),
        iten: hasMany()
      }),
      category: Model.extend({
        iten: hasMany()
      }),
      iten: Model.extend({
        category: belongsTo(),
        order: hasMany()
      })
    },
    seeds (server) {
      server.create('table', { number: '1', orders: 0, itens: 0 })
      server.createList('table', 20).forEach(table => {
        server.createList('order', 10, { table })
      })
      server.createList('category', 20).forEach(category => {
        server.createList('iten', 10, { category })
      })
    },
    factories: {
      table: Factory.extend({
        number (i) {
          return `${i + 2}`
        },
        duration () {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        itens () {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        orders () {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        totalSpending () {
          let min = 0
          let max = 3060

          return Math.floor(Math.random() * (max - min + 1)) + min
        }
      }),
      order: Factory.extend({
        number (i) {
          return `${i + 2}`
        },
        duration () {
          let min = 0
          let max = 60

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        name (i) {
          return `Rafael Rascovit ${i}`
        },
        tables () {
          let min = 1
          let max = 20

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        itens () {
          let min = 1
          let max = 20

          return Math.floor(Math.random() * (max - min + 1)) + min
        },
        origin () {
          let origins = ['app', 'restaurant']
          return origins[Math.floor(Math.random() * origins.length)]
        }
      }),
      category: Factory.extend({
        name (i) {
          return `Categoria ${i + 1}`
        }
      }),
      iten: Factory.extend({
        name (i) {
          return `Item ${i + 1}`
        },
        price () {
          let min = 1.35
          let max = 550

          return Math.random() * (min - max) + max
        },
        amount: 1
      })
    },
    routes () {
      this.namespace = ''

      // tables
      this.get('/tables')
      this.get('/tables/:id')
      this.post('/tables')
      this.patch('/tables/:id')
      this.del('/tables/:id')
      this.get('/table/:id/orders', (schema, request) => {
        let table = schema.tables.find(request.params.id)
        return table.order
      })

      // orders
      this.get('/orders')
      this.get('/orders/:id')
      this.post('/orders')
      this.patch('/orders/:id')
      this.del('/orders/:id')
      this.get('/orders/:id/itens', (schema, request) => {
        let order = schema.orders.find(request.params.id)
        return order.iten
      })

      // categories
      this.get('/category')
      this.get('/category/:id')
      this.post('/category')
      this.patch('/category/:id')
      this.del('/category/:id')
      this.get('/category/:id/itens', (schema, request) => {
        let category = schema.categories.find(request.params.id)
        return category.iten
      })

      // Configs
      this.get('/configs', () => {
        return {
          tipPercentage: 10,
          couvertPrice: 8.50
        }
      })
    }
  })
}
