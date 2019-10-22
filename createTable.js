const knex = require('./knex')

knex.schema.createTable('products', (table) => {
        table.increments('no')
        table.string('product')
        table.string('category')
        table.float('price')
        table.string('imported')
      }).then(() => console.log("table created"))
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
      });
