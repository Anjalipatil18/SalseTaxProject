const knex = require('./Model/knex')

knex.schema.createTable('cart', (table) => {
        table.increments('no')
        table.string('product')
        table.string('category')
        table.float('price')
        table.string('imported')
        table.float("quantity")
        table.float("priceWithQuantity")
      }).then(() => console.log("table created"))
        .catch((err) => { console.log(err); throw err })
