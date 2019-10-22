const knex = require('../knex.js')

let insertData = (productDetails)=>{
    knex('products').insert(productDetails)
    .then((result)=>{
        return ({ success: true, message: 'ok' },result);
    }).catch((err)=>{
       return (err)
    });
}

let getData = (productDetails)=>{
    knex.select('*').from('products')
    .then((productDetails)=>{
        return ({ success: true, message: 'ok' },productDetails);
    }).catch((err)=>{
        return (err)
    });
}

module.exports ={ 
                insertData,
                getData
                }  