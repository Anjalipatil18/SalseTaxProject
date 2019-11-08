const knex = require('./knex.js')

let insertData = (productDetails)=>{
    return knex('products').insert(productDetails)
}
let getData = (name)=>{
   return knex.select('*').from('products').where('product',name)
}

module.exports ={ 
                insertData,
                getData
                }  