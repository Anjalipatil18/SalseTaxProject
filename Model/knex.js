var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Anjali2018@',
      database : 'SalesTaxProject'
    }
})
console.log('database is connected now!');

module.exports = knex;
