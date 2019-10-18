const knex = require('./knex');

knex.schema.createTable('SalesTax', (table) => {
          table.increments('No')
          table.string('Product')
          table.string('stage')
          table.float('price')
          table.float('totalPrice')
          table.float('SalesTaxes')
          table.string("Country")
        }).then(() => console.log("table created"))
          .catch((err) => { console.log(err); throw err })
          .finally(() => {
              knex.destroy();
        });