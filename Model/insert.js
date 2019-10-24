const knex = require('../knex.js')

let insertData = (productDetails)=>{
    return knex('products').insert(productDetails)
    

}

let getData = ()=>{
   return knex.select('*').from('products')
}

module.exports ={ 
                insertData,
                getData
                }  